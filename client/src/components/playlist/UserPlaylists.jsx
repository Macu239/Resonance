import "./UserPlaylists.css"

export default function UserPlaylists() {
  return (
    <>
      <section className="header">
        <h3 className="title">
          Playlists
        </h3>
        <button>
          <img
            src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772667370/plus-solid-nobg_oxsd4x.png"
            alt="Add/Create Playlist" />
        </button>
      </section>

      <section className="searchbar" id="userlists_searchbar">
        <div>
          <img 
            src="https://res.cloudinary.com/da2m1qmvl/image/upload/v1772662690/magnifying-glass-solid-full-nobg_m7ovpq.png"
            alt="search" />

          <input>

          </input>
        </div>
      </section>

      <section className="item" id="userlists_playlists">

      </section>
    </>
  )
}