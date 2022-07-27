import {MdDeleteForever} from 'react-icons/md'

export const Note = () => {
  return (
    <div className="note">
      <span>Hello this is our first note!</span>
      <div className="note-footer">
        <small>13/04/2021</small>
        <MdDeleteForever className="delete-icon" size="1.3em"/>
      </div>
    </div>
  )
}