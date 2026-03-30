import { useState } from "react";
import "./AddPost.css";

export default function AddPost({ onPostCreated }) {
  const [postDraftData, setPostDraftData] = useState({
    content: "",
    createdAt: new Date(),
    attachments: {
      image: "",
      playlist: "",
      album: "",
      singleMusic: "",
      artist: "",
    },
    likes: 0,
    comments: [],
    reposts: 0,
    shares: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostDraftData((prev) => ({
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
          name="content"
          placeholder="What are you listening?"
          className="addPostInput"
          value={postDraftData.content}
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
            onClick={async () => {
              console.log("post that!", postDraftData.content);

              const respond = await fetch("http://localhost:3001/post", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  content: postDraftData.content,
                }),
              });

              if (onPostCreated) {
                onPostCreated();
              }
            }}
          >
            Post it
          </button>
        </div>
      </div>
    </div>
  );
}
