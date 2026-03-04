import { useState } from "react";
import "./AddPost.css";

export default function AddPost() {
  const [postDraftData, setPostDraftData] = useState({
    Content: "",
    attachments: {
      image: null,
      playlist: null,
      album: null,
      music: null,
      artist: null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpostDraftData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="addPostContainer">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
        alt="Profile Pic"
        className="addPostProfile"
      />
      <div className="addPostRight">
        <textarea
          type="text"
          name="Content"
          placeholder="What are you listening?"
          className="addPostInput"
          value={postDraftData.Content}
          onChange={handleChange}
        />
        <div className="addPostActions">
          <div className="addPostIcons">
            <div
              className="addPostIconsWrapper"
              onClick={() => console.log("Add picture")}
            >
              <img
                src="./imgs/homePage/picture.svg"
                alt="picture"
                className="addPostIcon"
              />
            </div>

            <div
              className="addPostIconsWrapper"
              onClick={() => console.log("Add playlist")}
            >
              <img
                src="./imgs/homePage/list-music.svg"
                alt="Playlist"
                className="addPostIcon"
              />
            </div>

            <div
              className="addPostIconsWrapper"
              onClick={() => console.log("Add album")}
            >
              <img
                src="./imgs/homePage/album-collection.svg"
                alt="Album"
                className="addPostIcon"
              />
            </div>

            <div
              className="addPostIconsWrapper"
              onClick={() => console.log("Add music")}
            >
              <img
                src="./imgs/homePage/music-player.svg"
                alt="Music"
                className="addPostIcon"
              />
            </div>

            <div
              className="addPostIconsWrapper"
              onClick={() => console.log("Add artist")}
            >
              <img
                src="./imgs/homePage/artist.svg"
                alt="Artists"
                className="addPostIcon"
              />
            </div>
          </div>
          <button
            className="addPostPostBtn"
            onClick={() => {
              console.log("post that!", postDraftData.Content);

              setpostDraftData((prev) => ({
                ...prev,
                Content: "",
              }));
            }}
          >
            Post it
          </button>
        </div>
      </div>
    </div>
  );
}
