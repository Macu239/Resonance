"use client"

import "./AddPlaylistForm.css"
import { useState } from "react";

export default function AddPlaylistForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd(title); 
    setTitle("");
  };

  return (
    <div className="add-form">
      <input
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd(); 
          if (e.key === 'Escape') setTitle(""); 
        }}
      />
      <button onClick={handleAdd}>Create</button>
    </div>
  );
}