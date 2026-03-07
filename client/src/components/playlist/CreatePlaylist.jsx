"use client"

import './CreatePlaylist.css'

export default function CreatePlaylist({ onToggle, showForm }) {
    return (
        //     <button onClick={onToggle}>
        //   {showForm ? "Cancel" : "+ Add Item"}
        // </button>
        <button onClick={onToggle}>
            {showForm ? 
            <img src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772735485/xmark-solid_lpgcww.png" alt="Cancel"/> : 
            <img src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/plus-solid-nobg_oxsd4x.png" alt="Add"/>}
        </button>
    )
}