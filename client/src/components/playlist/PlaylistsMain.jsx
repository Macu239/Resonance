import "./PlaylistsMain.css";
import Widgets from "./Widgets.jsx"
import UserPlaylists from "./UserPlaylists.jsx"
import RecPlaylists from "./RecPlaylists";

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
          <Widgets/>
        </section>

        <section className="playlists-container">
          <UserPlaylists/>
        </section>

        {/* <section className="misc-container">
          Test
        </section> */}

        <section className="rec-container">
          <RecPlaylists/>
        </section>

        <section className="currsong-container">
          Curr Song
        </section>

      </div>
    </div>
  )
}