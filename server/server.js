const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API first
app.use("/api/flashcards", flashcardRoutes);

// ✅ STATIC (important)
app.use(express.static(path.join(__dirname, "dist")));

// ✅ CATCH-ALL ONLY FOR NON-API
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) return next();

  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});