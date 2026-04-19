import Flashcard from "../components/Flashcard";

const Practice = ({ flashcards }) => {
  return (
    <div>
      {flashcards.map((card, i) => (
        <Flashcard key={i} card={card} />
      ))}
    </div>
  );
};

export default Practice;