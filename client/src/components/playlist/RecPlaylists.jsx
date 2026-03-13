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

function PlaylistDetail({ playlist, onClose, onAddSong, onRemoveSong }) {
  return (
    <div className='playlist-detail'>
      <button onClick={onClose}>← Back</button>
      <img src={playlist.cover} alt={playlist.title} />
      <h2>{playlist.title}</h2>
      <p>{playlist.desc}</p>
      <div className='songs'>
        {playlist.songs.map((song) => (
          <div key={song.id} className='song'>
            <img src={song.cover} alt={song.title} />
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.duration}</p>
            {/* <button onClick={() => onRemoveSong(song.id)}>Remove</button> */}
          </div>
        ))}
      </div>
    </div>
  )
}

const generateSong = (song) => {
  return ({
    id: crypto.randomUUID(),
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    duration: "3:45",
    cover: "song-cover-url",
    url: "audio-file-url",    // actual playable audio
  });
}

// generates a list of placeholder playlists
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

export default function RecPlaylists() {

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const [categories, setCategories] = useState([
    { id: crypto.randomUUID(), title: "Recommended", playlists: generatePlaylists(10,5) },
    { id: crypto.randomUUID(), title: "Based On Your Genres", playlists: generatePlaylists(10,5) },
    { id: crypto.randomUUID(), title: "Based On Your Beats", playlists: generatePlaylists(10,5) },
  ]);

  // add a song to a specific playlist
  const handleAddSong = (categoryId, playlistId, song) => {
    setCategories(categories.map((category) =>
      category.id === categoryId
        ? {
          ...category, playlists: category.playlists.map((playlist) =>
            playlist.id === playlistId
              ? {
                ...playlist, songs: [...playlist.songs, {
                  id: crypto.randomUUID(),
                  ...song
                }]
              }
              : playlist
          ) 
        }
        : category
    ));
  };

  // remove a song from a specific playlist
  const handleRemoveSong = (categoryId, playlistId, songId) => {
    setCategories(categories.map((category) =>
      category.id === categoryId
        ? {
          ...category, playlists: category.playlists.map((playlist) =>
            playlist.id === playlistId
              ? {
                ...playlist, songs: playlist.songs.filter((song) =>
                  song.id !== songId
                )
              }
              : playlist
          )
        }
        : category
    ));
  };

  // update playlist details like title, cover, desc
  const handleUpdatePlaylist = (categoryId, playlistId, updates) => {
    setCategories(categories.map((category) =>
      category.id === categoryId
        ? {
          ...category, playlists: category.playlists.map((playlist) =>
            playlist.id === playlistId
              ? { ...playlist, ...updates }  // spreads any updates over the playlist
              : playlist
          )
        }
        : category
    ));
  };

  // delete a playlist entirely
  const handleDeletePlaylist = (categoryId, playlistId) => {
    setCategories(categories.map((category) =>
      category.id === categoryId
        ? {
          ...category, playlists: category.playlists.filter((playlist) =>
            playlist.id !== playlistId
          )
        }
        : category
    ));
  };

  // adds a playlist to a specific category by its id
  const handleAdd = (categoryId, title, desc, cover) => {
    setCategories(categories.map((category) =>
      category.id === categoryId
        ? {
          ...category, playlists: [...category.playlists, {
            id: crypto.randomUUID(),
            title,
            desc,
            cover
          }]
        }
        : category
    ));
  };

  // adds a new category with an empty playlist list
  const handleAddCategory = (title) => {
    setCategories([...categories, {
      id: crypto.randomUUID(),
      title: title,
      playlists: []
    }]);
  };

  return (
    <section className='allRecPlaylists'>
      {/* show playlist detail if one is selected */}
      {selectedPlaylist
        ? <PlaylistDetail
          playlist={selectedPlaylist}
          onClose={() => setSelectedPlaylist(null)}
          onAddSong={(song) => handleAddSong(selectedPlaylist.categoryId, selectedPlaylist.id, song)}
          onRemoveSong={(songId) => handleRemoveSong(selectedPlaylist.categoryId, selectedPlaylist.id, songId)}
        />
        : categories.map((category) => (
          <section key={category.id} className='auto-playlists'>
            <h3 className='title'>{category.title}</h3>
            <div className='list'>
              {category.playlists.map((playlist) => (
                <Playlist
                  key={playlist.id}
                  {...playlist}
                  onSelect={() => setSelectedPlaylist({
                    ...playlist,
                    categoryId: category.id
                  })}
                />
              ))}
            </div>
          </section>
        ))
      }
    </section>
  )
}