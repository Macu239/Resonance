"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import "./page.css"
import { SongSelection } from "../../components/search"
import SearchBar from "@/components/search/SearchBar";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            try {
                const url =
                    searchQuery.trim() === ""
                        ? "http://localhost:3001/api/search"
                        : `http://localhost:3001/api/search?q=${encodeURIComponent(searchQuery)}`;

                console.log("Fetching URL:", url);

                const res = await fetch(url);
                const data = await res.json();
                setSongs(data);
            } catch (error) {
                console.error("Failed to fetch songs", error);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [searchQuery]);

    return (
        <div className={styles.container}>

            <div className={styles.header} style={{justifyContent: "center"}}>
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            <div className={"songHeader"} style={{justifyContent: "center"}}>
                Songs
            </div>

            <div className={"contents"} style={{ minHeight: "100vh" }}>
                <div className={"songGrid"}>
                    {songs.map((song) => (
                        <SongSelection key={song.songTitle} SongData={song} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;