import "./PlaylistsMain.css";
import Widgets from "./Widgets.jsx"


export default function PlaylistsMain() {
  /*
  -List of Components
      -Widget Selections
          -Add (pages, other general selections?)
          -Home Page Router
          -Search Playlist (sep page?)
          -Messages Page Router (or integrated)
      -Personal Playlists 
          -Create New Playlist
          -Search Playlists List
          -Playlist Display List
              -Playlist Item
      -Rec Playlists
          -Rec Playlists List
          -Genre Playlists List
          -Other...
      -Current Song/Playlist Bar
          -Play/Pause
          -Skip
          -Go Back 
          -Shuffle Setting
          -Repeat Setting
  */

  return (


    <div className="grid-main-wrapper">
      <div className="grid-main">
        <section className="widgets-container">
          <Widgets />
        </section>

        <section className="playlists-container">
          <div className="item">
            <h3 className="title">
              Playlists
            </h3>
          </div>

          <div className="item">
            <button>
              <img
                src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/plus-solid-nobg_oxsd4x.png"
                alt="Add/Create Playlist" />
            </button>
          </div>

          <div className="item" id="playlists_searchbar">
            <img
              src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662690/magnifying-glass-solid-full-nobg_m7ovpq.png"
              alt="search" />

            <input>

            </input>
          </div>
        </section>

        <section className="rec-container">
          Rec
        </section>

        <section className="currsong-container">
          Curr Song
        </section>

      </div>
    </div>
  )
}