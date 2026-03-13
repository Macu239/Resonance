"use client"

import './RecPlaylists.css'
import { useState } from 'react';

function Playlist({ title, desc, cover, songs, onSelect }) {
  return (
    <div className='item' onClick={() => onSelect()}>
      <img src={cover} alt={title} />
      <div className='text'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{songs.length} songs</p>
      </div>
    </div>
  )
}

const generateSong = () => {
  return ({
    id: crypto.randomUUID(),
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    duration: "3:45",
    cover: "song-cover-url",
    url: "audio-file-url",
  });
}

const generatePlaylists = (length, songCount) => {
  return Array.from({ length }, () => ({
    id: crypto.randomUUID(),
    title: "test",
    desc: "test",
    cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    songs: Array.from({ length: songCount }, () => generateSong()),
    createdBy: "user",
    dateCreated: new Date(),
    likes: 0,
  }));
}

export default function RecPlaylists({ onSelectPlaylist }) {

  const [categories] = useState([
    { id: crypto.randomUUID(), title: "Recommended",          playlists: generatePlaylists(10, 5) },
    { id: crypto.randomUUID(), title: "Based On Your Genres", playlists: generatePlaylists(10, 5) },
    { id: crypto.randomUUID(), title: "Based On Your Beats",  playlists: generatePlaylists(10, 5) },
  ]);

  return (
    <section className='allRecPlaylists'>
      {categories.map((category) => (
        <section key={category.id} className='auto-playlists'>
          <h3 className='title'>{category.title}</h3>
          <div className='list'>
            {category.playlists.map((playlist) => (
              <Playlist
                key={playlist.id}
                {...playlist}
                onSelect={() => onSelectPlaylist({  // ✅ sends selected playlist up to PlaylistsMain
                  ...playlist,
                  categoryId: category.id
                })}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}