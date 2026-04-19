router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    console.log("📥 Upload request received");

    if (!req.file) {
      console.log("❌ No file received");
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("📄 File:", req.file);

    const filePath = req.file.path;

    console.log("📂 Path:", filePath);

    const text = await extractTextFromPDF(filePath);

    console.log("🧠 Extracted text length:", text.length);

    const flashcards = await generateFlashcards(
      text.substring(0, 3000)
    );

    console.log("✅ Flashcards generated");

    res.json({ flashcards });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});