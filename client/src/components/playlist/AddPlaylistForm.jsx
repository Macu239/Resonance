"use client"

import "./Styles/AddPlaylistForm.css"
import { useState } from "react";

export default function AddPlaylistForm({ onAdd, onToggle }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd(title);   // ✅ passes title string up — no MongoDB call
    setTitle("");
  };

  return (
    <div className="add-form">
      <input
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter')  handleAdd();
          if (e.key === 'Escape') setTitle("");
        }}
      />
      <div>
        <button onClick={handleAdd}>Create</button>
        <button onClick={onToggle}>Cancel</button>
      </div>
    </div>
  );
}