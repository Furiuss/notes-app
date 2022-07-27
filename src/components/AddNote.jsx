import { useState } from "react";

export const AddNote = ({ addText }) => {
  const [noteText, setNoteText] = useState("");
  const charecterLimit = 200;

  const handleChange = (e) => {
    if (charecterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    const cleanText = noteText.trim();

    if (!cleanText) return;
    addText(cleanText);
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charecterLimit - noteText.length} remaining</small>
        <button onClick={handleSaveClick} className="save-btn">
          save
        </button>
      </div>
    </div>
  );
};
