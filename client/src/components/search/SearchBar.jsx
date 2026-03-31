"use client";
import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
    return (
        <div>
            <div>
                <input
                    className="searchBody"
                    placeholder="Search for a song"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    type="text"
                />
            </div>
        </div>
    );
}