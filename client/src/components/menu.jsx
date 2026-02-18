import "./menu.css";

export default function Menu() {
  return (
    <div className="menuCoontainer">
      <div className="menuList" onClick={() => console.log("Home clicked")}>
        <img src="./imgs/homePage/home.svg" alt="home icon" className="menuIcon" />
        <p>Home</p>
      </div>
      <div className="menuList" onClick={() => console.log("Search clicked")}>
        <img src="./imgs/homePage/search.svg" alt="search icon" className="menuIcon" />
        <p>Search</p>
      </div>
      <div className="menuList" onClick={() => console.log("Messages clicked")}>
        <img src="./imgs/homePage/paper-plane.svg" alt="messages icon" className="menuIcon" />
        <p>Messages</p>
      </div>
      <div className="menuList" onClick={() => console.log("Playlists clicked")}>
        <img src="./imgs/homePage/apps (1).svg" alt="playlists icon" className="menuIcon" />
        <p>Playlists</p>
      </div>
      <div className="menuList" onClick={() => console.log("Profile clicked")}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
          alt="home icon"
          className="menuIcon"
          id="menuProfilePic"
        />
        <p>Profile</p>
      </div>
    </div>
  );
}
