const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

let mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  try {
    mongoUri = require("./config").mongoUri;
  } catch (e) {
    mongoUri = "";
  }
}

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

let dbReady = false;
let resultsCol = null;
let visitsCol = null;

async function connectDB() {
  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    const db = client.db("devopstyper");
    resultsCol = db.collection("results");
    visitsCol = db.collection("visits");
    dbReady = true;
    console.log("MongoDB connected to", mongoUri.split("@")[1] || "database");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    console.error("Edit config.js with your Atlas connection URI to enable history.");
  }
}
connectDB();

// ---- API ----
app.get("/api/results", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  try {
    const items = await resultsCol.find({}).sort({ date: -1 }).limit(200).toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/results", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  const doc = req.body;
  if (!doc || doc.wpm === undefined) {
    return res.status(400).json({ error: "invalid payload" });
  }
  try {
    doc.date = doc.date ? new Date(doc.date) : new Date();
    const r = await resultsCol.insertOne(doc);
    res.status(201).json({ id: r.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/results/:id", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  try {
    await resultsCol.deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/results", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  try {
    await resultsCol.deleteMany({});
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/visit", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  const visitorId = req.body && req.body.visitorId;
  if (!visitorId) return res.status(400).json({ error: "missing visitorId" });
  try {
    await visitsCol.insertOne({ visitorId: String(visitorId).slice(0, 100), ts: new Date() });
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const ADMIN_KEY = process.env.ADMIN_KEY || "devopstyper-admin";

app.get("/api/stats", async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "database not connected" });
  if (req.query.key !== ADMIN_KEY) return res.status(401).json({ error: "unauthorized" });
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`devopstyper-59 server running at http://localhost:${PORT}`);
});