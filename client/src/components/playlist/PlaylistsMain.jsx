import "./PlaylistsMain.css";


export default function PlaylistsMain() {
  /*
  -List of Components
      -Widget Selections
          -Add...
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
    <>
      <div className="grid-main-wrapper">
        <div className="grid-main">
          <div className="widgets-container">
            <div className="widgets-item">
              <img
                className="home-btn"
                src="https://drive.google.com/file/d/1v0UPmbxbrItAul5217hhvEUE1TvYzOPr/view?usp=sharing"
                alt="home" />
              <img className="search-btn" src="" alt="search" />
              <img className="msgs-btn" src="" alt="msgs" />
              <img className="add-btn" src="" alt="add" />
            </div>
          </div>
          <div className="playlists-container">
            Playlists
          </div>
          <div className="rec-container">
            Rec
          </div>
          <div className="currsong-container">
            Curr Song
          </div>
        </div>
      </div>
    </>
  )
}