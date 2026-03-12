"use client"

import { useState, useRef, useCallback } from "react";
import "./PlaylistsMain.css";
import Widgets from "./Widgets.jsx"
import UserPlaylists from "./UserPlaylists.jsx"
import RecPlaylists from "./RecPlaylists";

const WIDGETS_WIDTH = 5;
const MIN_PLAYLISTS = 20;
const MIN_REC = 30;
const MIN_MISC = 20;
const MIN_MAIN = 80;
const MIN_CURRSONG = 8;
const TOTAL_FR = 100;

export default function PlaylistsMain() {

  const [colWidths, setColWidths] = useState({
    playlists: 25,
    rec: 50,
    misc: 20,
  });

  const [rowHeights, setRowHeights] = useState({
    main: 87.5,
    currsong: 12.5,
  });

  const gridRef = useRef(null);
  const draggingRef = useRef(null);

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
      const deltaX = moveEvent.clientX - draggingRef.current.startX;
      const deltaFR = (deltaX / gridWidth) * TOTAL_FR;

      let newWidths = { ...draggingRef.current.startWidths };

      if (handle === 'drag-1') {
        let newPlaylists = newWidths.playlists + deltaFR;
        let newRec = newWidths.rec - deltaFR;

        if (newPlaylists < MIN_PLAYLISTS) {
          newRec += newPlaylists - MIN_PLAYLISTS;
          newPlaylists = MIN_PLAYLISTS;
        }
        if (newRec < MIN_REC) {
          newPlaylists += newRec - MIN_REC;
          newRec = MIN_REC;
        }

        newWidths.playlists = newPlaylists;
        newWidths.rec = newRec;
      }

      if (handle === 'drag-2') {
        let newRec = newWidths.rec + deltaFR;
        let newMisc = newWidths.misc - deltaFR;

        if (newRec < MIN_REC) {
          newMisc += newRec - MIN_REC;
          newRec = MIN_REC;
        }
        if (newMisc < MIN_MISC) {
          newRec += newMisc - MIN_MISC;
          newMisc = MIN_MISC;
        }

        newWidths.rec = newRec;
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

  const startDragVertical = useCallback((e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeights = { ...rowHeights };

    const onMove = (moveEvent) => {
      const gridHeight = gridRef.current.offsetHeight;
      const deltaY = moveEvent.clientY - startY;
      const deltaFR = (deltaY / gridHeight) * 100;

      let newMain = startHeights.main + deltaFR;
      let newCurrsong = startHeights.currsong - deltaFR;

      if (newMain < MIN_MAIN) {
        newCurrsong += newMain - MIN_MAIN;
        newMain = MIN_MAIN;
      }
      if (newCurrsong < MIN_CURRSONG) {
        newMain += newCurrsong - MIN_CURRSONG;
        newCurrsong = MIN_CURRSONG;
      }

      setRowHeights({ main: newMain, currsong: newCurrsong });
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [rowHeights]);

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

        {/* ✅ gap spacer between widgets and playlists */}
        <div style={{ gridArea: 'gap' }} />

        <section className="playlists-container">
          <UserPlaylists />
        </section>

        <div
          className="drag-handle"
          style={{ gridArea: 'drag-1' }}
          onMouseDown={(e) => startDragHorizontal(e, 'drag-1')}
        />

        <section className="rec-container">
          <RecPlaylists />
        </section>

        <div
          className="drag-handle"
          style={{ gridArea: 'drag-2' }}
          onMouseDown={(e) => startDragHorizontal(e, 'drag-2')}
        />

        <section className="misc-container">
          Test
        </section>

        <div
          className="drag-handle-vertical"
          style={{ gridArea: 'drag-v' }}
          onMouseDown={startDragVertical}
        />

        <section className="currsong-container">
          Curr Song
        </section>
      </div>
    </div>
  );
}