import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    if (newNote.title.trim() === '') {
      alert('Title is required!');
      return;
    }
    if (editingNote) {
      // Edit mode: Update existing note
      setNotes(notes.map(note => 
        note.id === editingNote.id 
          ? { ...newNote, id: editingNote.id } 
          : note
      ));
      setEditingNote(null);
    } else {
      // Add mode: Create new note
      const noteWithId = { ...newNote, id: Date.now() };
      setNotes([...notes, noteWithId]);
    }
  };

  const editNote = (note) => {
    setEditingNote(note);
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== id));
      if (editingNote && editingNote.id === id) {
        setEditingNote(null);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Notes App</h1>
      </header>
      <main className="App-main">
        <NoteForm 
          onSubmit={addNote} 
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
        <NoteList 
          notes={notes} 
          onEdit={editNote} 
          onDelete={deleteNote} 
        />
      </main>
    </div>
  );
}

export default App;
