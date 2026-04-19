const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const { extractTextFromPDF } = require("../services/pdfService");
const { generateFlashcards } = require("../services/aiService");

// 🔥 ensure uploads folder exists
const uploadDir = "uploads/";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;

    const text = await extractTextFromPDF(filePath);

    const flashcards = await generateFlashcards(
      text.substring(0, 3000)
    );

    res.json({ flashcards });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;