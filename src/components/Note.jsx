import { MdDeleteForever, MdSave } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Note = ({
  note,
  handleDeleteNote,
  handleEditNote,
  isEditing,
  setIsEditing,
}) => {
  return (
    <div className="note">
      {isEditing ? (
        <textarea className="editTextArea" cols="10" rows="8">
          {note.text}
        </textarea>
      ) : (
        <span>{note.text}</span>
      )}
      <div className="note-footer">
        <small>{note.date}</small>
        <div className="icons">
          {isEditing ? (
            <MdSave
              onClick={() => setIsEditing(true)}
              className="saveEdit-icon"
              size="1.3em"
            />
          ) : (
            <FaEdit
              onClick={() => setIsEditing(true)}
              className="edit-icon"
              size="1.3em"
            />
          )}
          <MdDeleteForever
            onClick={() => handleDeleteNote(note.id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
};
