import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NotesList = ({ notes, addText }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote addText={addText}/>
    </div>
  );
};
