import { Note } from "./Note";

export const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};
