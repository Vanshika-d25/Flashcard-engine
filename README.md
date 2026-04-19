# 📚 Flashcard Engine – AI-Based Learning Tool

An AI-powered web application that converts PDF content into interactive flashcards to enhance learning through active recall.

---

## 🚀 Live Demo
👉 https://your-render-url.onrender.com  

---

## 🧠 Features

- 📄 Upload PDF files
- 🧾 Extract text automatically
- 🤖 Generate flashcards using AI
- 🔁 Fallback mechanism if AI fails
- 🔄 Flip flashcards for Q/A view
- 🌐 Single URL deployment (frontend + backend)

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)

### Backend
- Node.js
- Express.js

### Libraries & Tools
- Multer – file upload handling
- pdf-parse – PDF text extraction
- OpenAI API – flashcard generation

### Deployment
- Render (full-stack deployment)

---

## ⚙️ How It Works

1. User uploads a PDF file
2. Backend extracts text from the PDF
3. Text is sent to AI for flashcard generation
4. Flashcards are displayed on the UI
5. If AI fails, fallback logic generates basic flashcards

---

## 💡 Key Design Decisions

- Implemented fallback mechanism for reliability
- Used environment-based API configuration
- Limited input size to optimize performance
- Separated backend into routes and services
- Deployed as a single service for simplicity

---

## ⚠️ Challenges Faced

- Handling file uploads in a cloud environment
- Fixing frontend-backend API connection issues
- Debugging deployment errors (static files, MIME types)
- Managing API failures and fallback logic

---

## 🚀 Future Improvements

- User authentication system
- Save and revisit flashcards
- Spaced repetition algorithm
- Better UI/UX design
- Support for more file formats

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/flashcard-engine.git
cd flashcard-engine
