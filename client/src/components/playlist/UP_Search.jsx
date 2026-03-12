"use client"

import './UP_Search.css';
import { useState } from 'react';

export default function UP_Search({ onSearch }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        const trimmed = search.trim();
        onSearch(trimmed);
    }

    return (
        <input
            placeholder="Search..."
            value={search}
            onChange={(e) => {
                setSearch(e.target.value);
                onSearch(e.target.value.trim());
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearch();
                if (e.key === 'Escape') {
                    setSearch("");       
                    onSearch("");  
                }
            }}
        />
    )
}