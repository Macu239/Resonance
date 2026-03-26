"use client"

import "./Styles/AddPlaylistForm.css"
import { useState } from "react";

export default function AddPlaylistForm({ onAdd, onToggle }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="add-form">
      <h2>Create New Playlist</h2>
      <div className="title-input">
        <h3>Playlist Name: </h3>
        <input
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAdd();
            if (e.key === 'Escape') setTitle("");
          }}
        />
      </div>
      <div className="finish-buttons">
        <button onClick={handleAdd}>Create</button>
        <button onClick={onToggle}>Cancel</button>
      </div>
    </div>
  );
}