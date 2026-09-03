const express = require("express");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

// ---- Environment ----
const ADMIN_KEY = process.env.ADMIN_KEY;
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data.json");

if (!ADMIN_KEY) {
  console.warn("WARNING: ADMIN_KEY not set. Stats and delete endpoints are disabled.");
}

// ---- Data store (in-memory + JSON file, no MongoDB) ----
const store = {
  results: [],
  visits: [],
  _loaded: false,
};

function loadStore() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
      store.results = Array.isArray(raw.results) ? raw.results : [];
      store.visits = Array.isArray(raw.visits) ? raw.visits : [];
    }
  } catch (e) {
    console.error("Failed to load data file, starting fresh:", e.message);
    store.results = [];
    store.visits = [];
  }
  store._loaded = true;
}

let saveTimer = null;
function saveStore() {
  if (!store._loaded) return;
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify({ results: store.results, visits: store.visits }));
    } catch (e) {
      console.error("Failed to save data file:", e.message);
    }
  }, 200);
}

loadStore();

function genererateId() {
  return crypto.randomBytes(8).toString("hex");
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
  "data.json",
];
app.use((req, res, next) => {
  const basename = path.basename(decodeURIComponent(req.url.split("?")[0]));
  if (sensitiveFiles.includes(basename)) {
    return res.status(404).json({ error: "not found" });
  }
  next();
});

app.use(express.static(path.join(__dirname)));

// ---- Rate limiting (in-memory) ----
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
  res.json({ status: "ok", db: false, storage: "json-file" });
});

// ---- Results API ----
app.get("/api/results", (req, res) => {
  const limit = Math.max(1, Math.min(500, Number(req.query.limit) || 200));
  const items = store.results
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
  res.json(items);
});

app.post("/api/results", rateLimit(60000, 30), (req, res) => {
  const raw = req.body || {};
  if (raw.wpm === undefined || raw.wpm === null) {
    return res.status(400).json({ error: "invalid payload" });
  }
  const doc = {
    id: genererateId(),
    wpm: Math.max(0, Math.min(300, Number(raw.wpm) || 0)),
    accuracy: Math.max(0, Math.min(100, Number(raw.accuracy) || 0)),
    correctWords: Math.max(0, Math.min(1000, Number(raw.correctWords) || 0)),
    incorrectWords: Math.max(0, Math.min(1000, Number(raw.incorrectWords) || 0)),
    mode: ["word", "passage", "commands"].includes(raw.mode) ? raw.mode : "word",
    date: raw.date ? new Date(raw.date).toISOString() : new Date().toISOString(),
  };
  store.results.push(doc);
  saveStore();
  res.status(201).json({ id: doc.id });
});

app.delete("/api/results/:id", requireAdmin, (req, res) => {
  const before = store.results.length;
  store.results = store.results.filter((r) => r.id !== req.params.id);
  if (store.results.length === before) {
    return res.status(404).json({ error: "not found" });
  }
  saveStore();
  res.json({ ok: true });
});

app.delete("/api/results", requireAdmin, (req, res) => {
  store.results = [];
  saveStore();
  res.json({ ok: true });
});

// ---- Visit tracking ----
app.post("/api/visit", rateLimit(60000, 60), (req, res) => {
  const visitorId = req.body && req.body.visitorId;
  if (!visitorId || typeof visitorId !== "string") {
    return res.status(400).json({ error: "missing visitorId" });
  }
  store.visits.push({
    visitorId: visitorId.slice(0, 100),
    ts: new Date().toISOString(),
  });
  // keep only last 50k visits in memory to bound memory use
  if (store.visits.length > 50000) {
    store.visits = store.visits.slice(-50000);
  }
  saveStore();
  res.status(201).json({ ok: true });
});

// ---- Stats (admin only) ----
app.get("/api/stats", requireAdmin, (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const startIso = start.toISOString();
  const totalVisits = store.visits.length;
  const uniqueVisitors = new Set(store.visits.map((v) => v.visitorId)).size;
  const todayVisits = store.visits.filter((v) => new Date(v.ts) >= start).length;
  const results = store.results.length;
  const resultsToday = store.results.filter((r) => new Date(r.date) >= start).length;
  res.json({ totalVisits, uniqueVisitors, todayVisits, results, resultsToday });
});

// ---- Global error handler ----
app.use((err, req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "internal server error" });
});

// ---- Graceful shutdown ----
function shutdown() {
  console.log("Shutting down...");
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ results: store.results, visits: store.visits }));
  } catch (e) {
    console.error("Failed to save data file on shutdown:", e.message);
  }
  process.exit(0);
}
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// ---- Start ----
app.listen(PORT, () => {
  console.log("devopstyper-59 running on port " + PORT + " (storage: JSON file, no MongoDB)");
});
