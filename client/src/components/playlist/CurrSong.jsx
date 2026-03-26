"use client"

import { useState, useRef, useEffect } from "react";
import "./Styles/CurrSong.css";

const IconShuffle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

const IconPrev = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="19 20 9 12 19 4 19 20" />
    <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconPause = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const IconNext = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconRepeat = ({ mode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    {mode === "one" && <text x="10" y="14" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">1</text>}
  </svg>
);

const IconVolume = ({ level }) => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    {level > 0   && <path d="M15.54 8.46a5 5 0 0 1 0 7.07"    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
    {level > 0.5 && <path d="M19.07 4.93a10 10 0 0 1 0 14.14"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
  </svg>
);

const IconHeart = ({ liked }) => (
  <svg viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const formatTime = (secs) => {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

// Props:
//   songList      — array of song objects (owned by PlaylistsMain)
//   trackIndex    — current track index   (owned by PlaylistsMain)
//   onTrackChange — callback(newIndex) to update trackIndex in PlaylistsMain
export default function CurrSong({ songList = [], trackIndex = 0, onTrackChange = () => {} }) {

  const [isPlaying,   setIsPlaying]   = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration,    setDuration]    = useState(0);
  const [volume,      setVolume]      = useState(0.8);
  const [isMuted,     setIsMuted]     = useState(false);
  const [shuffle,     setShuffle]     = useState(false);
  const [repeat,      setRepeat]      = useState("none");
  const [liked,       setLiked]       = useState(false);

  const audioRef = useRef(null);
  const song     = songList[trackIndex] ?? null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !song) return;
    audio.volume = isMuted ? 0 : volume;
    setCurrentTime(0);
    setLiked(false);
    if (song.url) {
      audio.src = song.url;
      if (isPlaying) audio.play().catch(() => {});
    } else {
      audio.src = "";
    }
  }, [trackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying && song?.url) audio.play().catch(() => {});
    else audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const handleTimeUpdate     = () => setCurrentTime(audioRef.current?.currentTime ?? 0);
  const handleLoadedMetadata = () => setDuration(audioRef.current?.duration ?? 0);

  const handleEnded = () => {
    if (repeat === "one") {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (repeat === "all" || trackIndex < songList.length - 1) {
      handleNext();
    } else {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => setIsPlaying((p) => !p);

  const handlePrev = () => {
    if (currentTime > 3) { audioRef.current.currentTime = 0; return; }
    onTrackChange(trackIndex === 0 ? songList.length - 1 : trackIndex - 1);
  };

  const handleNext = () => {
    let next;
    if (shuffle) {
      do { next = Math.floor(Math.random() * songList.length); }
      while (next === trackIndex && songList.length > 1);
    } else {
      next = (trackIndex + 1) % songList.length;
    }
    onTrackChange(next);
  };

  const handleSeek   = (e) => { const v = parseFloat(e.target.value); setCurrentTime(v); if (audioRef.current) audioRef.current.currentTime = v; };
  const handleVolume = (e) => { const v = parseFloat(e.target.value); setVolume(v); setIsMuted(v === 0); };
  const cycleRepeat  = ()  => setRepeat((r) => r === "none" ? "all" : r === "all" ? "one" : "none");

  const seekPct   = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePct = isMuted ? 0 : volume * 100;

  if (!song) return (
    <div className="currsong">
      <p style={{ color: "rgba(255,235,205,0.4)", fontSize: "0.8rem" }}>No songs loaded</p>
    </div>
  );

  return (
    <div className="currsong">
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} onEnded={handleEnded} />

      {/* Left */}
      <div className="cs-info">
        <img className="cs-cover" src={song.cover} alt={song.title} />
        <div className="cs-meta">
          <span className="cs-title">{song.title}</span>
          <span className="cs-artist">{song.artist}</span>
        </div>
        <button className={`cs-icon-btn cs-like ${liked ? "cs-active" : ""}`} onClick={() => setLiked((l) => !l)} title="Like">
          <IconHeart liked={liked} />
        </button>
      </div>

      {/* Center */}
      <div className="cs-center">
        <div className="cs-controls">
          <button className={`cs-icon-btn cs-shuffle ${shuffle ? "cs-active" : ""}`} onClick={() => setShuffle((s) => !s)} title="Shuffle"><IconShuffle /></button>
          <button className="cs-icon-btn cs-prev"      onClick={handlePrev}      title="Previous"><IconPrev /></button>
          <button className="cs-icon-btn cs-playpause" onClick={handlePlayPause} title={isPlaying ? "Pause" : "Play"}>{isPlaying ? <IconPause /> : <IconPlay />}</button>
          <button className="cs-icon-btn cs-next"      onClick={handleNext}      title="Next"><IconNext /></button>
          <button className={`cs-icon-btn cs-repeat ${repeat !== "none" ? "cs-active" : ""}`} onClick={cycleRepeat} title={`Repeat: ${repeat}`}><IconRepeat mode={repeat} /></button>
        </div>
        <div className="cs-seek-row">
          <span className="cs-time">{formatTime(currentTime)}</span>
          <div className="cs-slider-wrap">
            <input className="cs-seek" type="range" min={0} max={duration || 1} step={0.1} value={currentTime} onChange={handleSeek} style={{ "--pct": `${seekPct}%` }} />
          </div>
          <span className="cs-time">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right */}
      <div className="cs-right">
        <button className="cs-icon-btn cs-mute" onClick={() => setIsMuted((m) => !m)} title="Mute">
          <IconVolume level={isMuted ? 0 : volume} />
        </button>
        <div className="cs-slider-wrap cs-vol-wrap">
          <input className="cs-volume" type="range" min={0} max={1} step={0.01} value={isMuted ? 0 : volume} onChange={handleVolume} style={{ "--pct": `${volumePct}%` }} />
        </div>
      </div>
    </div>
  );
}