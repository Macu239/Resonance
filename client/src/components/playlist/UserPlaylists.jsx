"use client"

import "./UserPlaylists.css"
import UP_Search from "./UP_Search";
import CreatePlaylist from "./CreatePlaylist";
import AddPlaylistForm from "./AddPlaylistForm"
import { useState } from "react";


function Playlist({ title, desc, cover }) {
  return (
    <div className="item">
      <img src={cover} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function UserPlaylists() {

  const [items, setItems] = useState([]);
  const [specLists, setSpecLists] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [showSpecLists, setShowSpecLists] = useState(false);

  const displayList = showSpecLists ? specLists : items;

  const handleAdd = (title) => {
    const newItem = {
      id: crypto.randomUUID(),
      title: title,
      desc: "user",
      cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    };
    setItems([...items, newItem]);
    setShowForm(false);  // hides form after adding
  };

  const handleSpecAdd = (search) => {
    if (search == "") { setShowSpecLists(false); return; }
    {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setSpecLists(filtered);
      setShowSpecLists(true);
    }
  };

  return (
    <>
      <section className="header">
        <h3 className="title">
          Playlists
        </h3>
        <CreatePlaylist
          onToggle={() => setShowForm(!showForm)}
          showForm={showForm}
        />
      </section>

      <section className="searchbar" id="userlists_searchbar">
        <div>
          <img
            src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662690/magnifying-glass-solid-full-nobg_m7ovpq.png"
            alt="search" />

          <UP_Search onSearch={handleSpecAdd} />
        </div>
      </section>

      <section className="user-playlists" id="userlists_playlists">
        <div className="list">
          {displayList.map((item) => (
            <Playlist key={item.id} {...item} />
          ))}

          {/* Form component — only renders when showForm is true */}
          {showForm && <AddPlaylistForm onAdd={handleAdd} />}
        </div>
      </section>
    </>
  )
}