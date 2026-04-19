const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateFlashcards = async (text) => {
  try {
    const prompt = `
Convert the following text into high-quality flashcards.

Rules:
- Cover key concepts
- Include definitions and examples
- Avoid trivial questions
- Keep Q/A clear and concise

Return ONLY valid JSON (no markdown, no backticks):

[
  { "question": "...", "answer": "..." }
]

Text:
${text}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let content = response.choices[0].message.content;

    // 🔥 Clean AI response (important)
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(content);

  } catch (error) {
    console.log("⚠️ AI failed, using fallback");

    // 🔥 FALLBACK (works without API credits)
    const sentences = text
      .split(".")
      .map(s => s.trim())
      .filter(s => s.length > 20)
      .slice(0, 5);

    return sentences.map((s, i) => ({
      question: `Explain: ${s}`,
      answer: s,
    }));
  }
};

module.exports = { generateFlashcards };