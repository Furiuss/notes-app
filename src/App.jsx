import { useState } from "react";
import { nanoid } from "nanoid";
import { NotesList } from "./components/NotesList";
import "./App.css";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const addText = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    setNotes((notes) => [...notes, newNote]);
  };

  const editNote = (id) => {
    return;
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={darkMode ? "dark-mode main" : 'main'}>
      <div className="container">
        <Header handleToggleDarkMode={() => setDarkMode(!darkMode)} />
        {notes.length >= 1 && <Search handleSearch={setSearchText} />}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addText={addText}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
}

export default App;
