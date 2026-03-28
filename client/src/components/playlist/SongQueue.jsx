"use client"

import "./Styles/SongQueue.css";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconNowPlaying = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="sq-now-icon">
    <rect x="2"  y="16" width="4" height="8" rx="1">
      <animate attributeName="height" values="8;16;8" dur="0.9s" repeatCount="indefinite" />
      <animate attributeName="y"      values="16;8;16" dur="0.9s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="10" width="4" height="14" rx="1">
      <animate attributeName="height" values="14;6;14" dur="0.75s" repeatCount="indefinite" />
      <animate attributeName="y"      values="10;18;10" dur="0.75s" repeatCount="indefinite" />
    </rect>
    <rect x="18" y="13" width="4" height="11" rx="1">
      <animate attributeName="height" values="11;18;11" dur="1.1s" repeatCount="indefinite" />
      <animate attributeName="y"      values="13;6;13"  dur="1.1s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const IconQueue = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8"  y1="6"  x2="21" y2="6"  />
    <line x1="8"  y1="12" x2="21" y2="12" />
    <line x1="8"  y1="18" x2="21" y2="18" />
    <line x1="3"  y1="6"  x2="3.01" y2="6"  />
    <line x1="3"  y1="12" x2="3.01" y2="12" />
    <line x1="3"  y1="18" x2="3.01" y2="18" />
  </svg>
);

const IconDots = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5"  cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
);

// ─── Single queue row ─────────────────────────────────────────────────────────
function QueueItem({ song, index, isCurrent, isUpNext, onClick }) {
  return (
    <div
      className={`sq-item ${isCurrent ? "sq-item--current" : ""} ${isUpNext ? "sq-item--upnext" : ""}`}
      onClick={() => onClick(index)}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      {/* Cover / now-playing indicator */}
      <div className="sq-item-cover-wrap">
        <img className="sq-item-cover" src={song.cover} alt={song.title} />
        {isCurrent && (
          <div className="sq-item-playing-overlay">
            <IconNowPlaying />
          </div>
        )}
        {!isCurrent && (
          <div className="sq-item-index-overlay">
            <span>{index + 1}</span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="sq-item-text">
        <span className="sq-item-title">{song.title}</span>
        <span className="sq-item-artist">{song.artist}</span>
      </div>

      {/* Duration + options */}
      <div className="sq-item-right">
        <span className="sq-item-duration">{song.duration ?? "—"}</span>
        <button
          className="sq-item-dots"
          onClick={(e) => { e.stopPropagation(); /* future: context menu */ }}
          title="More options"
        >
          <IconDots />
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
// Props:
//   songList    — full array of song objects (same list CurrSong uses)
//   trackIndex  — index of currently playing song
//   onSelect    — callback(index) when user clicks a song to jump to it
export default function SongQueue({ songList = [], trackIndex = 0, onSelect = () => {} }) {

  const currentSong = songList[trackIndex];
  const upNext      = songList.slice(trackIndex + 1);
  const prevSongs   = songList.slice(0, trackIndex);

  return (
    <div className="sq-root">

      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="sq-header">
        <div className="sq-header-icon"><IconQueue /></div>
        <h2 className="sq-header-title">Queue</h2>
      </div>

      {/* ── Scrollable body ─────────────────────────────────────── */}
      <div className="sq-body">

        {/* Now Playing */}
        {currentSong && (
          <section className="sq-section">
            <p className="sq-section-label">Now Playing</p>
            <QueueItem
              song={currentSong}
              index={trackIndex}
              isCurrent
              isUpNext={false}
              onClick={onSelect}
            />
          </section>
        )}

        {/* Up Next */}
        {upNext.length > 0 && (
          <section className="sq-section">
            <p className="sq-section-label">Next Up</p>
            {upNext.map((song, i) => (
              <QueueItem
                key={song.id}
                song={song}
                index={trackIndex + 1 + i}
                isCurrent={false}
                isUpNext
                onClick={onSelect}
              />
            ))}
          </section>
        )}

        {/* Previously played */}
        {prevSongs.length > 0 && (
          <section className="sq-section sq-section--prev">
            <p className="sq-section-label">Previously Played</p>
            {prevSongs.map((song, i) => (
              <QueueItem
                key={song.id}
                song={song}
                index={i}
                isCurrent={false}
                isUpNext={false}
                onClick={onSelect}
              />
            ))}
          </section>
        )}

        {songList.length === 0 && (
          <p className="sq-empty">No songs in queue</p>
        )}
      </div>
    </div>
  );
}