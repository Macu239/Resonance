import "./PlaylistsMain.css";


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
    <>
      <div className="grid-main-wrapper">
        <div className="grid-main">
          <div className="widgets-container">
            <ul className="navbar">
              <li>
                <div className="item" id="widgets_homebtn">
                  <a id="widgets_item_homebtn" href="/">
                    <img
                      src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662689/house-solid-full-nobg_knaeep.png"
                      alt="home" />
                  </a>
                </div>
              </li>
              <li>
                <div className="item" id="widgets_msgsbtn">
                  <a id="widgets_item_msgsbtn" href="/messages">
                    <img
                      src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/paper-plane-solid-full-nobg_v3gow3.png"
                      alt="msgs" />
                  </a>
                </div>
              </li>
              <li>
                <div className="item" id="widgets_searchbtn">
                  <a id="widgets_item_searchbtn" href="/">
                    <img
                      src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662690/magnifying-glass-solid-full-nobg_m7ovpq.png"
                      alt="search" />
                  </a>
                </div>
              </li>
              <li>
                <div className="item" id="widgets_optbtn">
                  <a id="widgets_item_optbtn" href="">
                    <img
                      src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772680934/bars-solid_ut921k.png"
                      alt="options" />
                  </a>
                </div>
              </li>
            </ul>
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