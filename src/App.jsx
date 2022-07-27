import {useState} from 'react'
import {uniqid} from 'uniqid'
import { NotesList } from "./components/NotesList";
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    {
      id: uniqid(),
      text: 'This is my first note',
      date: '15/04/2021'
    },
    {
      id: uniqid(),
      text: 'This is my first note',
      date: '15/04/2021'
    },
    {
      id: uniqid(),
      text: 'This is my first note',
      date: '15/04/2021'
    }
  ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}

export default App;