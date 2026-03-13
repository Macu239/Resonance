"use client"

import './CreatePlaylist.css'

export default function CreatePlaylist({ onToggle, showForm }) {
    return (
        <button onClick={onToggle}>
            <img
                src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/plus-solid-nobg_oxsd4x.png"
                alt="Add"
                className={showForm ? "rotated" : ""}
            />
        </button>
    )
}