import "./menu.css";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="menuContainer">

      <Link href="/">
        <div className="menuList" onClick={() => console.log("Home clicked")}>
          <img
            src="./imgs/homePage/home.svg"
            alt="home icon"
            className="mainPageMenuIcon"
          />
          <p>Home</p>
        </div>
      </Link>
      
      <Link href="/explore">
        <div
          className="menuList"
          onClick={() => console.log("Explore clicked")}
        >
          <img
            src="./imgs/homePage/compass.svg"
            alt="explore icon"
            className="mainPageMenuIcon"
          />
          <p>Explore</p>
        </div>
      </Link>

      <Link href="/search">
        <div className="menuList" onClick={() => console.log("Search clicked")}>
          <img
            src="./imgs/homePage/search.svg"
            alt="search icon"
            className="mainPageMenuIcon"
          />
          <p>Search</p>
        </div>
      </Link>

      <Link href="/messages">
        <div
          className="menuList"
          onClick={() => console.log("Messages clicked")}
        >
          <img
            src="./imgs/homePage/paper-plane.svg"
            alt="messages icon"
            className="mainPageMenuIcon"
          />
          <p>Messages</p>
        </div>
      </Link>

      <Link href="/playlists">
        <div
          className="menuList"
          onClick={() => console.log("Playlists clicked")}
        >
          <img
            src="./imgs/homePage/apps (1).svg"
            alt="playlists icon"
            className="mainPageMenuIcon"
          />
          <p>Playlists</p>
        </div>
      </Link>

      <Link href="/profile">
        <div
          className="menuList"
          onClick={() => console.log("Profile clicked")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="home icon"
            className="mainPageMenuIcon"
            id="menuProfilePic"
          />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
}
