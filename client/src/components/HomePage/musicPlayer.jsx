import "./musicPlayer.css";
import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    console.log(isPlaying ? "Paused" : "Playing");
  };

  return (
    <div className="musicPlayerContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Joji_-_Piss_in_the_Wind.jpg/250px-Joji_-_Piss_in_the_Wind.jpg"
        alt="Album Cover"
        className="musicPlayeralbumCover"
      />
      <div className="musicPlayerText">
        <h3>Song Title(with kendrick lamar)</h3>
        <p>Artist Name</p>
      </div>
      <div className="musicPlayerButtons">
        <img
          src="./imgs/homePage/play (2).png"
          alt="Play Button"
          className="musicPlayerSidebutton"
          onClick={() => console.log("Shuffle clicked")}
        />
        <img
          src="./imgs/homePage/previous-icon.png"
          alt="Play Button"
          className="musicPlayerSidebutton"
          onClick={() => console.log("previous clicked")}
        />
        <img
          src={isPlaying ? "./imgs/homePage/pause.png" : "./imgs/homePage/play-button.png"}
          alt="Play Button"
          className="musicPlayerMainbutton"
          onClick={handlePlayPause}
        />
        <img
          src="./imgs/homePage/next-icon.png"
          alt="Play Button"
          className="musicPlayerSidebutton"
          onClick={() => console.log("next clicked")}
        />
        <img
          src="./imgs/homePage/play (1).png"
          alt="Play Button"
          className="musicPlayerSidebutton"
          onClick={() => console.log("replay clicked")}
        />
      </div>
    </div>
  );
}
