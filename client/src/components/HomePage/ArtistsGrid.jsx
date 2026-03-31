import "./ArtistsGrid.css";
import { useState } from "react";
import { ArtistGridData } from "./ArtistGridData";

export default function ArtistsGrid() {
  return (
    <div className="ArtistsGridContatiner">
      <h3 className="ArtistsGridTitle">Trending Artists</h3>
      <div className="ArtistsProfiles">
        {ArtistGridData.slice(0, 9).map((artist) => (
          <div className="ArtistProfile" key={artist.artistID} onClick={() => console.log("Artist clicked", artist.name)}>
            <img
              src={artist.profilePicture}
              alt="Artist Profile"
              className="ArtistProfilePicture"
            />
            <p className="ArtistName">{artist.name}</p>
          </div>
        ))}
      </div>
      <div className="ArtistsSeeMore" onClick={console.log("see more artist clicked")}>See More</div>
    </div>
  );
}
