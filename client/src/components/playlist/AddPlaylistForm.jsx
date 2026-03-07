"use client"

import "./AddPlaylistForm.css"
import { useState } from "react";

export default function AddPlaylistForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd(title);  // this sends the title back up to the parent
    setTitle("");
  };

  return (
    <div className="add-form">
      <input
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Create</button>
    </div>
  );
}