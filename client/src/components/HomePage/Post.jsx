import "./Post.css";
import { useState } from "react";

export default function Post({ PostData }) {
  const [likes, setLikes] = useState(PostData.likes);
  const [liked,isLiked] = useState(false);
  const toggleLike = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/post/${PostData._id}/likes`,
        {
          method: "PATCH",
        },
      );

      const updatedPost = await res.json();

      setLikes(updatedPost.likes);
    } catch (err) {
      console.error(err);
    }
  };

  const [shares, setShares] = useState(PostData.shares);
  const toggleShare = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/post/${PostData._id}/shares`,
        {
          method: "PATCH",
        },
      );

      const updatedPost = await res.json();

      setShares(updatedPost.shares);
    } catch (err) {
      console.error(err);
    }
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
          <h4 className="postUserName">{PostData.postedBy}</h4>
          <span className="postTimeStamp"> · {PostData.createdAt}</span>{" "}
        </div>
        <div className="postContent">{PostData.content}</div>
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
            <p className="postReactionCount">({PostData.comments.length})</p>
          </div>
          {/*<div
            className="postReaction"
            onClick={() => console.log("Repost clicked")}
          >
            <img
              src="./imgs/homePage/arrows-retweet.svg"
              alt="repost"
              className="postReactionIcon"
            />
            <p className="postReactionCount">({PostData.reposts})</p>
          </div>*/}
          <div
            className="postReaction"
            id="postLike"
            onClick={() => toggleLike()}
          >
            <img
              src={
                isLiked
                  ? "./imgs/homePage/heart (2).svg"
                  : "./imgs/homePage/heart.svg"
              }
              alt="like"
              className="postReactionIcon"
            />
            <p className="postReactionCount">({likes})</p>
          </div>
          <div
            className="postReaction"
            onClick={() => toggleShare()}
          >
            <img
              src="./imgs/homePage/share.svg"
              alt="share"
              className="postReactionIcon"
            />
            <p className="postReactionCount">({shares})</p>
          </div>
        </div>
      </div>
      <img
        src="./imgs/homePage/menu-dots.svg"
        alt="More"
        className="postMoreOptions"
      />
    </div>
  );
}
