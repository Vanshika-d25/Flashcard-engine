const express = require("express");
const router = express.Router();
const multer = require("multer");

const { extractTextFromPDF } = require("../services/pdfService");
const { generateFlashcards } = require("../services/aiService");

// multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// upload + parse + AI
router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No PDF uploaded" });
    }

    const filePath = req.file.path;

  
    const text = await extractTextFromPDF(filePath);

    const trimmedText = text.substring(0, 3000);

    
    const flashcards = await generateFlashcards(trimmedText);

    res.json({
      message: "Flashcards generated successfully",
      flashcards,
    });

  } catch (error) {
    console.error("Route error:", error);
    res.status(500).json({ error: "Error processing PDF" });
  }
});

module.exports = router;