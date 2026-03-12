"use client"

import './RecPlaylists.css'
import { useEffect, useState } from 'react';

function Playlist({ title, desc, cover }) {
    return (
        <div className='item'>
            <img src={cover} alt={title} />
            <div className='text'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default function RecPlaylists() {

    // afterwards connect this with data from mongoDB
    const [recLists, setRecLists] = useState(
        Array.from({ length: 10 }, () => ({
            id: crypto.randomUUID(),
            title: "test",
            desc: "test",
            cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg"
        }))
    );

    const [genreLists, setGenreLists] = useState(
        Array.from({ length: 10 }, () => ({
            id: crypto.randomUUID(),
            title: "test",
            desc: "test",
            cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg"
        }))
    );

    const [beatLists, setBeatLists] = useState(
        Array.from({ length: 10 }, () => ({
            id: crypto.randomUUID(),
            title: "test",
            desc: "test",
            cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg"
        }))
    );

    const handleAddRec = (title, desc, cover) => {
        const newPList = {
            id: crypto.randomUUID(),
            title: title,
            desc: desc,
            cover: cover,
        };
        setRecLists([...recLists, newPList]);
    }

    const handleAddGenre = (title, desc, cover) => {
        const newPList = {
            id: crypto.randomUUID(),
            title: title,
            desc: desc,
            cover: cover,
        };
        setGenreLists([...genreLists, newPList]);
    }

    const handleAddBeat = (title, desc, cover) => {
        const newPList = {
            id: crypto.randomUUID(),
            title: title,
            desc: desc,
            cover: cover,
        };
        setBeatLists([...beatLists, newPList]);
    }


    return (
        <section className='allRecPlaylists'>
            <section className='auto-playlists'>
                <h3 className='title'>
                    Recommended
                </h3>
                <div className='list'>
                    {recLists.map((playlist) => (
                        <Playlist key={playlist.id} {...playlist} />
                    ))}
                </div>
            </section>
            <section className='auto-playlists'>
                <h3 className='title'>
                    Based On Your Genres
                </h3>
                <div className='list'>
                    {genreLists.map((playlist) => (
                        <Playlist key={playlist.id} {...playlist} />
                    ))}
                </div>
            </section>
            <section className='auto-playlists'>
                <h3 className='title'>
                    Based On Your Genres
                </h3>
                <div className='list'>
                    {beatLists.map((playlist) => (
                        <Playlist key={playlist.id} {...playlist} />
                    ))}
                </div>
            </section>
        </section>
    )
}