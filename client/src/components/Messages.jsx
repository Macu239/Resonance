import { useState } from "react";
import"./Messages.css";

export default function Messages(){
    const [messagesCount, setMessagesCount] = useState(15);

    return(
        <div className="messagesContainer" onClick={()=> console.log("Message window clicked")}>
            <img src="./imgs/homePage/send.png" alt="Messages" className="messagesIcon"/>
            <p>Messages</p>
            <div className="messagesCount">
                {messagesCount > 9 ? "9+" : messagesCount}
            </div>
        </div>
    );
}