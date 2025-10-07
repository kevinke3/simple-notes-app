import React, { useState, useEffect } from 'react';

function NoteForm({ onSubmit, editingNote, setEditingNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    // Clear form after submit (handled in useEffect for edit mode)
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
      />
      <div>
        <button type="submit">
          {editingNote ? 'Update Note' : 'Add Note'}
        </button>
        {editingNote && (
          <button type="button" className="cancel-btn" onClick={() => setEditingNote(null)}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
