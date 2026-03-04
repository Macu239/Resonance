import { useState } from "react";
import "./Messages.css";

export default function Messages() {
  const [messagesCount, setMessagesCount] = useState(15);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <div
        className={`messagesContainer ${isOpen ? "open" : ""}`}
        onClick={handleOpen}
      >
        <img
          src="./imgs/homePage/send.png"
          alt="Messages"
          className="messagesIcon"
        />
        <p>Messages</p>
        <div className="messagesCount">
          {messagesCount > 9 ? "9+" : messagesCount}
        </div>
      </div>
      <div className={`messagesPanel ${isOpen ? "open" : ""}`}>
        <div className="messagesHeader">
          <p>Messages</p>
          <span onClick={() => setIsOpen(false)}>✕</span>
        </div>

        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
        <div className="messagesContentBlock">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIp43lb7XJgrrcCeu3g-CSgpEg6tlV-NtgKA&s"
            alt="User"
            className="messageUserIcon"
          />
          <div className="messageContent">
            <p className="messageUserName">User Name</p>
            <p className="messageMessage">Message 1</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
