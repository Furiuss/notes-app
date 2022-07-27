import { Note } from "./Note";

export const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note text={note.text} date={note.date} />
      ))}
    </div>
  );
};
