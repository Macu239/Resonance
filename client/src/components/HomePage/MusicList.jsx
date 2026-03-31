import { useState } from "react";
import "./MusicList.css";
import { FriendsListeningList } from "./FriendsLinsteningList";

export default function MusicList() {
  const [listeningCount, setListeningCount] = useState(12);
  return (
    <div className="musicListContainer">
      <h3>Friends Listening</h3>
      {FriendsListeningList.slice(0, 6).map((song) => (
        <div className="musicListItem" key={song.songId} onClick={()=> console.log("Song cliked")}>
          <img
            src={song.albumCover}
            alt="album cover"
            className="musicListAlbumCover"
          />
          <div className="musicListText">
            <h4>{song.songTitle}</h4>
            <p>{song.artistName}</p>
          </div>
          <div className="musicListListenCounts">
            <img
              src="./imgs/homePage/friends (1).png"
              alt="friend icon"
              className="listenCountIcon"
            />
            <p className="listenCount">{song.listeningCount}+</p>
          </div>
        </div>
      ))}
      <div className="musicListSeeMore" onClick={console.log("see more music clicked")}>See More</div>
    </div>
  );
}
