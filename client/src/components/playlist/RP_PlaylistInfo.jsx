"use client"

export default function RP_PlaylistInfo({ playlist, onClose, onAddSong, onRemoveSong }) {
  return (
    <div className='playlist-detail'>
      <button onClick={onClose}>← Back</button>
      <img src={playlist.cover} alt={playlist.title} />
      <h2>{playlist.title}</h2>
      <p>{playlist.desc}</p>
      <div className='songs'>
        {playlist.songs.map((song) => (
          <div key={song.id} className='song'>
            <img src={song.cover} alt={song.title} />
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}