import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return <p>No notes yet. Add one above!</p>;
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
