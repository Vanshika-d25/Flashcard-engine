const fs = require("fs");
const pdfParse = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {
  try {
    console.log("Reading file:", filePath);

    if (!fs.existsSync(filePath)) {
      throw new Error("File not found");
    }

    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);

    console.log("PDF parsed successfully");

    return data.text;
  } catch (error) {
    console.error("PDF parsing error FULL:", error);
    throw error;
  }
};

module.exports = { extractTextFromPDF };