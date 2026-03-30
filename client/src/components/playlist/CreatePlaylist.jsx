"use client"

import './Styles/CreatePlaylist.css'
import playlistData from './data/playlistData.json'

export default function CreatePlaylist({ onToggle, showForm }) {

    const { imgSrc, imgAlt } = playlistData.crPlaylistData;

    return (
        <button onClick={onToggle}>
            <img
                src={imgSrc}
                alt={imgAlt}
                className={showForm ? "rotated" : ""}
            />
        </button>
    )
}