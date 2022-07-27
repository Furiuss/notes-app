import { useState } from "react";

export const AddNote = ({addText}) => {
  const [noteText, setNoteText] = useState("");

  const handleSaveClick = () => {
    addText(noteText)
  }

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="note-footer">
        <small>200 remaing</small>
        <button onClick={handleSaveClick} className="save-btn">save</button>
      </div>
    </div>
  );
};
