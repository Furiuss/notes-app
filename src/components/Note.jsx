import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const Note = ({ note, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <div className="icons">
          <FaEdit
            onClick={() => handleEditNote(note.id)}
            className="edit-icon"
            size="1.3em"
          />
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
