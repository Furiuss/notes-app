import { useState } from "react";
import { nanoid } from "nanoid";
import { NotesList } from "./components/NotesList";
import "./App.css";
import { Search } from "./components/Search";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('')

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
      <Search handleSearch={setSearchText}/>
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        addText={addText}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
