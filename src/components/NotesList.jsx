import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NotesList = ({
  notes,
  addText,
  handleDeleteNote,
  handleEditNote,
  isEditing,
  setIsEditing
}) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ))}
      <AddNote editText={handleEditNote} addText={addText} />
    </div>
  );
};
