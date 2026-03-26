"use client"

import { useState, useRef, useCallback } from "react";
import "./Styles/PlaylistsMain.css";
import Widgets from "./Widgets.jsx"
import UserPlaylists from "./UserPlaylists.jsx"
import RecPlaylists from "./RecPlaylists";
import RP_PlaylistInfo from "./RP_PlaylistInfo";
import AddPlaylistForm from "./AddPlaylistForm";
import CurrSong from "./CurrSong";
import SongQueue from "./SongQueue";

// ── Default song list — replace with MongoDB data later ──────────────────────
const SONG_LIST = [
  {
    id: "1",
    title: "Song Title One",
    artist: "Artist Name",
    album: "Album One",
    cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    duration: "3:45",
    url: "https://res.cloudinary.com/da2m1qmvl/video/upload/Djo_-_End_Of_Beginning_Official_Audio_phukoa.mp3",
  },
  {
    id: "2",
    title: "Song Title Two",
    artist: "Artist Name",
    album: "Album Two",
    cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    duration: "4:12",
    url: "https://res.cloudinary.com/da2m1qmvl/video/upload/Radiohead_-_Weird_Fishes_-_by_Tobias_Stretch_trnmu6.mp3",
  },
  {
    id: "3",
    title: "Song Title Three",
    artist: "Artist Name",
    album: "Album Three",
    cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    duration: "2:58",
    url: "https://res.cloudinary.com/da2m1qmvl/video/upload/v1774562735/Like_Him_yihzt1.mp3",
  },
];

const WIDGETS_WIDTH  = 5;
const MIN_PLAYLISTS  = 20;
const MIN_REC        = 30;
const MIN_MISC       = 20;
const MIN_MAIN       = 80;
const MIN_CURRSONG   = 12.5;
const TOTAL_FR       = 100;

export default function PlaylistsMain() {

  // ── Shared audio state ─────────────────────────────────────────────────────
  // Lifted here so both CurrSong and SongQueue stay in sync
  const [trackIndex, setTrackIndex] = useState(0);
  const [songList]                  = useState(SONG_LIST);

  // ── Misc panel state ───────────────────────────────────────────────────────
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [showForm,         setShowForm]         = useState(false);
  const [items,            setItems]            = useState([]);

  // ── Grid resize state ──────────────────────────────────────────────────────
  const [colWidths, setColWidths] = useState({
    playlists: 25,
    rec: 50,
    misc: 20,
  });

  const [rowHeights, setRowHeights] = useState({
    main: 87.5,
    currsong: 12.5,
  });

  const gridRef     = useRef(null);
  const draggingRef = useRef(null);

  // ── Form toggle ────────────────────────────────────────────────────────────
  const handleToggleForm = () => {
    setShowForm(!showForm);
    setSelectedPlaylist(null);
  };

  // ── Playlist created ───────────────────────────────────────────────────────
  const handlePlaylistCreated = (title) => {
    const newItem = {
      id: crypto.randomUUID(),
      title: title,
      desc: "user",
      cover: "https://res.cloudinary.com/da2m1qmvl/image/upload/v1772921353/daftpunkcover_dgdhnt.jpg",
    };
    setItems([...items, newItem]);
    setShowForm(false);
    setSelectedPlaylist(null);
  };

  // ── Misc content switcher ──────────────────────────────────────────────────
  // Priority: form > playlist detail > queue (default)
  const renderMiscContent = () => {
    if (showForm) return (
      <AddPlaylistForm
        onAdd={(title) => handlePlaylistCreated(title)}
        onToggle={handleToggleForm}
      />
    );
    if (selectedPlaylist) return (
      <RP_PlaylistInfo
        playlist={selectedPlaylist}
        onClose={() => setSelectedPlaylist(null)}
      />
    );
    // ✅ Default: show the song queue
    return (
      <SongQueue
        songList={songList}
        trackIndex={trackIndex}
        onSelect={(index) => setTrackIndex(index)}
      />
    );
  };

  // ── Horizontal drag ────────────────────────────────────────────────────────
  const startDragHorizontal = useCallback((e, handle) => {
    e.preventDefault();
    draggingRef.current = {
      handle,
      startX: e.clientX,
      startWidths: { ...colWidths },
    };

    const onMove = (moveEvent) => {
      if (!draggingRef.current) return;
      const gridWidth = gridRef.current.offsetWidth;
      const deltaX    = moveEvent.clientX - draggingRef.current.startX;
      const deltaFR   = (deltaX / gridWidth) * TOTAL_FR;
      let newWidths   = { ...draggingRef.current.startWidths };

      if (handle === 'drag-1') {
        let newPlaylists = newWidths.playlists + deltaFR;
        let newRec       = newWidths.rec - deltaFR;
        if (newPlaylists < MIN_PLAYLISTS) { newRec += newPlaylists - MIN_PLAYLISTS; newPlaylists = MIN_PLAYLISTS; }
        if (newRec < MIN_REC)             { newPlaylists += newRec - MIN_REC;       newRec = MIN_REC; }
        newWidths.playlists = newPlaylists;
        newWidths.rec       = newRec;
      }

      if (handle === 'drag-2') {
        let newRec  = newWidths.rec + deltaFR;
        let newMisc = newWidths.misc - deltaFR;
        if (newRec < MIN_REC)   { newMisc += newRec - MIN_REC;   newRec = MIN_REC; }
        if (newMisc < MIN_MISC) { newRec += newMisc - MIN_MISC;  newMisc = MIN_MISC; }
        newWidths.rec  = newRec;
        newWidths.misc = newMisc;
      }

      setColWidths(newWidths);
    };

    const onUp = () => {
      draggingRef.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [colWidths]);

  // ── Vertical drag ──────────────────────────────────────────────────────────
  const startDragVertical = useCallback((e) => {
    e.preventDefault();
    const startY      = e.clientY;
    const startHeights = { ...rowHeights };

    const onMove = (moveEvent) => {
      const gridHeight = gridRef.current.offsetHeight;
      const deltaY     = moveEvent.clientY - startY;
      const deltaFR    = (deltaY / gridHeight) * 100;
      let newMain      = startHeights.main + deltaFR;
      let newCurrsong  = startHeights.currsong - deltaFR;

      if (newMain < MIN_MAIN)         { newCurrsong += newMain - MIN_MAIN;         newMain = MIN_MAIN; }
      if (newCurrsong < MIN_CURRSONG) { newMain += newCurrsong - MIN_CURRSONG;     newCurrsong = MIN_CURRSONG; }

      setRowHeights({ main: newMain, currsong: newCurrsong });
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [rowHeights]);

  // ── Grid template strings ──────────────────────────────────────────────────
  const gridTemplateColumns = `
    ${WIDGETS_WIDTH}fr
    1rem
    ${colWidths.playlists}fr
    6px
    ${colWidths.rec}fr
    6px
    ${colWidths.misc}fr
  `;

  const gridTemplateRows = `
    ${rowHeights.main}fr
    6px
    ${rowHeights.currsong}fr
  `;

  return (
    <div className="grid-main-wrapper">
      <div
        className="grid-main"
        ref={gridRef}
        style={{
          gridTemplateColumns,
          gridTemplateRows,
          gridTemplateAreas: `
            "widgets gap playlists drag-1 rec drag-2 misc"
            "drag-v drag-v drag-v drag-v drag-v drag-v drag-v"
            "currsong currsong currsong currsong currsong currsong currsong"
          `
        }}
      >
        <section className="widgets-container">
          <Widgets />
        </section>

        <div style={{ gridArea: 'gap' }} />

        <section className="playlists-container">
          <UserPlaylists
            items={items}
            showForm={showForm}
            onToggle={handleToggleForm}
            onAdd={handlePlaylistCreated}
          />
        </section>

        <div
          className="drag-handle"
          style={{ gridArea: 'drag-1' }}
          onMouseDown={(e) => startDragHorizontal(e, 'drag-1')}
        />

        <section className="rec-container">
          <RecPlaylists onSelectPlaylist={setSelectedPlaylist} />
        </section>

        <div
          className="drag-handle"
          style={{ gridArea: 'drag-2' }}
          onMouseDown={(e) => startDragHorizontal(e, 'drag-2')}
        />

        {/* ✅ misc — queue by default, form or playlist detail when active */}
        <section className="misc-container">
          {renderMiscContent()}
        </section>

        <div
          className="drag-handle-vertical"
          style={{ gridArea: 'drag-v' }}
          onMouseDown={startDragVertical}
        />

        {/* ✅ CurrSong receives shared trackIndex + setter */}
        <section className="currsong-container">
          <CurrSong
            songList={songList}
            trackIndex={trackIndex}
            onTrackChange={setTrackIndex}
          />
        </section>
      </div>
    </div>
  );
}