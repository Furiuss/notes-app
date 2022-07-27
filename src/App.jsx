import {useState} from 'react'
import {nanoid} from 'nanoid'
import { NotesList } from "./components/NotesList";
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '15/04/2021'
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '15/04/2021'
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '15/04/2021'
    }
  ]);

  const addText = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString()
    }
    setNotes(notes => [...notes, newNote])
  }

  return (
    <div className="container">
      <NotesList addText={addText} notes={notes}/>
    </div>
  )
}

export default App;