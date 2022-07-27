import { useState } from "react";
import { nanoid } from "nanoid";
import { NotesList } from "./components/NotesList";
import "./App.css";
import { Search } from "./components/Search";

const initialState = [
  {
    id: nanoid(),
    text: "This is my first note",
    date: "15/04/2021",
  },
  {
    id: nanoid(),
    text: "This is my second note",
    date: "15/04/2021",
  },
  {
    id: nanoid(),
    text: "This is my third note",
    date: "15/04/2021",
  },
]

function App() {
  const [notes, setNotes] = useState(initialState);

  const addText = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    setNotes((notes) => [...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container">
      <Search />
      <NotesList
        addText={addText}
        handleDeleteNote={deleteNote}
        notes={notes}
      />
    </div>
  );
}

export default App;
