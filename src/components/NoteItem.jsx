import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(note)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
