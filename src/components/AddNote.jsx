export const AddNote = () => {
  return (
    <div className="note new">
      <textarea cols="10" rows="8" placeholder="Type to add a note...">
      </textarea>
      <div className="note-footer">
        <small>200 remaing</small>
        <button className="save-btn">save</button>
      </div>
    </div>
  );
};
