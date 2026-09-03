const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");
const crypto = require("crypto");

// ---- Environment ----
const MONGO_URI = process.env.MONGO_URI;
const ADMIN_KEY = process.env.ADMIN_KEY;
const PORT = process.env.PORT || 3000;

if (!MONGO_URI && !path.join(__dirname, "config.js")) {
  console.error("MONGO_URI is required. Set it in Render or create config.js.");
}

function getMongoUri() {
  if (MONGO_URI) return MONGO_URI;
  try {
    return require("./config").mongoUri;
  } catch (e) {
    return "";
  }
}

const mongoUri = getMongoUri();

if (!ADMIN_KEY) {
  console.warn("WARNING: ADMIN_KEY not set. Stats and delete endpoints are disabled.");
}

// ---- Express setup ----
const app = express();
app.use(express.json({ limit: "16kb" }));
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'"
  );
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
});

const sensitiveFiles = [
  "config.js",
  "config.example.js",
  "package.json",
  "package-lock.json",
  ".env",
  ".env.example",
  ".gitignore",
];
app.use((req, res, next) => {
  const basename = path.basename(decodeURIComponent(req.url.split("?")[0]));
  if (sensitiveFiles.includes(basename)) {
    return res.status(404).json({ error: "not found" });
  }
  next();
});

app.use(express.static(path.join(__dirname)));

// ---- Rate limiting (in-memory, no redis) ----
const rateBuckets = new Map();
function rateLimit(windowMs, max) {
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    const entry = rateBuckets.get(key) || { start: now, count: 0 };
    if (now - entry.start > windowMs) {
      rateBuckets.set(key, { start: now, count: 1 });
      return next();
    }
    entry.count++;
    if (entry.count > max) {
      return res.status(429).json({ error: "too many requests" });
    }
    next();
  };
}

// ---- Database ----
let dbReady = false;
let dbError = "";
let resultsCol = null;
let visitsCol = null;
let mongoClient = null;

async function connectDB(retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      mongoClient = new MongoClient(mongoUri);
      await mongoClient.connect();
      const db = mongoClient.db("devopstyper");
      resultsCol = db.collection("results");
      visitsCol = db.collection("visits");
      dbReady = true;
      dbError = "";
      await resultsCol.createIndex({ date: -1 });
      await visitsCol.createIndex({ ts: -1 });
      await visitsCol.createIndex({ visitorId: 1 });
      console.log("MongoDB connected (attempt " + attempt + ")");
      return;
    } catch (err) {
      dbError = err.message;
      console.error("MongoDB attempt " + attempt + "/" + retries + " failed:", err.message);
      if (attempt < retries) {
        const delay = Math.min(1000 * Math.pow(2, attempt), 10000);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  console.error("MongoDB connection failed after " + retries + " attempts.");
}
connectDB();

function dbUnavailable(res) {
  return res.status(503).json({ error: "database not connected", detail: dbError });
}

function requireAdmin(req, res, next) {
  if (!ADMIN_KEY) return res.status(503).json({ error: "admin key not configured" });
  const key = req.query.key || req.headers["x-admin-key"];
  const a = Buffer.from(key || "");
  const b = Buffer.from(ADMIN_KEY);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: "unauthorized" });
  }
  next();
}

// ---- Health ----
app.get("/api/health", (req, res) => {
  res.json({ status: dbReady ? "ok" : "degraded", db: dbReady });
});

// ---- Results API ----
app.get("/api/results", async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  try {
    const items = await resultsCol.find({}).sort({ date: -1 }).limit(200).toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/results", rateLimit(60000, 30), async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  const raw = req.body || {};
  if (raw.wpm === undefined || raw.wpm === null) {
    return res.status(400).json({ error: "invalid payload" });
  }
  const doc = {
    wpm: Math.max(0, Math.min(300, Number(raw.wpm) || 0)),
    accuracy: Math.max(0, Math.min(100, Number(raw.accuracy) || 0)),
    correctWords: Math.max(0, Math.min(1000, Number(raw.correctWords) || 0)),
    incorrectWords: Math.max(0, Math.min(1000, Number(raw.incorrectWords) || 0)),
    mode: ["word", "passage", "commands"].includes(raw.mode) ? raw.mode : "word",
    date: raw.date ? new Date(raw.date) : new Date(),
  };
  try {
    const r = await resultsCol.insertOne(doc);
    res.status(201).json({ id: r.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/results/:id", requireAdmin, async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  try {
    await resultsCol.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/results", requireAdmin, async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  try {
    await resultsCol.deleteMany({});
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---- Visit tracking ----
app.post("/api/visit", rateLimit(60000, 60), async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  const visitorId = req.body && req.body.visitorId;
  if (!visitorId || typeof visitorId !== "string") {
    return res.status(400).json({ error: "missing visitorId" });
  }
  try {
    await visitsCol.insertOne({
      visitorId: visitorId.slice(0, 100),
      ts: new Date(),
    });
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---- Stats (admin only) ----
app.get("/api/stats", requireAdmin, async (req, res) => {
  if (!dbReady) return dbUnavailable(res);
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const totalVisits = await visitsCol.countDocuments({});
    const uniqueVisitors = (await visitsCol.distinct("visitorId")).length;
    const todayVisits = await visitsCol.countDocuments({ ts: { $gte: start } });
    const results = await resultsCol.countDocuments({});
    const resultsToday = await resultsCol.countDocuments({ date: { $gte: start } });
    res.json({ totalVisits, uniqueVisitors, todayVisits, results, resultsToday });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---- Global error handler ----
app.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "internal server error" });
});

// ---- Graceful shutdown ----
function shutdown() {
  console.log("Shutting down...");
  if (mongoClient) {
    mongoClient.close().catch(() => {});
  }
  process.exit(0);
}
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// ---- Start ----
app.listen(PORT, () => {
  console.log("devopstyper-59 running on port " + PORT);
});
