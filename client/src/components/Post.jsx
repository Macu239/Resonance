import "./Post.css";
import { useState } from "react";

export default function Post({ PostData }) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="postContainer">
      <img
        src={PostData.profilePic}
        alt="Profile Picture"
        className="postProfilePic"
      />
      <div className="postRight">
        <div className="postHeader">
          <h4 className="postUserName">{PostData.userName}</h4>
          <span className="postTimeStamp">
            {" "}
            · {PostData.postTimeStamp}
          </span>{" "}
        </div>
        <div className="postContent">{PostData.postContent}</div>
        <div className="postReactions">
          <div
            className="postReaction"
            onClick={() => console.log("comments clicked")}
          >
            <img
              src="./imgs/homePage/comments.svg"
              alt="comments"
              className="postReactionIcon"
            />
            <p className="postReactionCount">({PostData.comments})</p>
          </div>
          <div
            className="postReaction"
            onClick={() => console.log("Repost clicked")}
          >
            <img
              src="./imgs/homePage/arrows-retweet.svg"
              alt="repost"
              className="postReactionIcon"
            />
            <p className="postReactionCount">({PostData.reposts})</p>
          </div>
          <div className="postReaction" onClick={() => toggleLike()}>
            <img
              src={isLiked ? "./imgs/homePage/heart (2).svg" : "./imgs/homePage/heart.svg"}
              alt="like"
              className="postReactionIcon"
              id="postLike"
            />
            <p className="postReactionCount">({PostData.likes})</p>
          </div>
          <div
            className="postReaction"
            onClick={() => console.log("share clicked")}
          >
            <img src="./imgs/homePage/share.svg" alt="share" className="postReactionIcon" />
            <p className="postReactionCount">({PostData.shares})</p>
          </div>
        </div>
      </div>
      <img src="./imgs/homePage/menu-dots.svg" alt="More" className="postMoreOptions" />
    </div>
  );
}
