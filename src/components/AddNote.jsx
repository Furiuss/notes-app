export const AddNote = () => {
  return (
    <div className="note new-note">
      <textarea cols="10" rows="8" placeholder="Type to add a note">
      </textarea>
      <div className="note-footer">
        <small>200 remaing</small>
        <button className="save">save</button>
      </div>
    </div>
  );
};
