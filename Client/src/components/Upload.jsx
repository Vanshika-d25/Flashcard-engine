import { useState } from "react";
import { uploadPDF } from "../services/api";

const Upload = ({ setFlashcards }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("pdf", file);

    const res = await uploadPDF(formData);
    setFlashcards(res.data.flashcards);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;