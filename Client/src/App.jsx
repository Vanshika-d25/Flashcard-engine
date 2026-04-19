import { useState } from "react";
import Upload from "./components/Upload";
import Practice from "./pages/Practice";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  return (
    <div style={{ textAlign: "center" }}>
  <h1>📚 Flashcard Engine</h1>

  <Upload setFlashcards={setFlashcards} />

  <h3>Total Cards: {flashcards.length}</h3>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
    <Practice flashcards={flashcards} />
  </div>
</div>
  );
}

export default App;