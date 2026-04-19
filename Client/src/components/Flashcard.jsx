import { useState } from "react";

const Flashcard = ({ card }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      onClick={() => setFlip(!flip)}
      style={{
        width: "320px",
        minHeight: "180px",
        borderRadius: "12px",
        padding: "20px",
        margin: "15px",
        cursor: "pointer",
        background: flip ? "#e3f2fd" : "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <h4>{flip ? "Answer" : "Question"}</h4>
      <p>{flip ? card.answer : card.question}</p>
    </div>
  );
};

export default Flashcard;