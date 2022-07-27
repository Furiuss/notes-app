import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NotesList = ({ notes, addText, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote addText={addText}/>
    </div>
  );
};
