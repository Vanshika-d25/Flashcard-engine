const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API FIRST
app.use("/api/flashcards", flashcardRoutes);

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "dist")));

// ❌ REMOVE app.get("/*")

// ✅ Catch-all (FIX)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});