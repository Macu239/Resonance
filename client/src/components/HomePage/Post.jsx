import "./Post.css";
import { useState } from "react";
import { timeAgo } from "./timeAgo";

function Comment({ comment, postId }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes ?? 0);

  const toggleCommentLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="postCommentElements">
      <img
        className="postCommentsProfile"
        src={comment.profilePic || "./imgs/homePage/default-avatar.svg"}
        alt={comment.userName}
      />
      <div className="postCommentsContents">
        <div className="postCommentsText">
          <h4 className="postCommentsUserName">{comment.userName}</h4>
          <p>{comment.text}</p>
        </div>
        <p className="postCommentsTimStamp">
          {timeAgo(comment.createdAt)} · {likes} likes
        </p>
      </div>
      <div className="postCommentsLikes" onClick={toggleCommentLike}>
        <img
          src={
            liked
              ? "./imgs/homePage/heart (2).svg"
              : "./imgs/homePage/heart.svg"
          }
          alt="like comment"
          className="postCommentsLikeIcon"
        />
      </div>
    </div>
  );
}

export default function Post({ PostData }) {
  const [likes, setLikes] = useState(PostData.likes);
  const [liked, setLiked] = useState(false);
  const [shares, setShares] = useState(PostData.shares);
  const [comments, setComments] = useState(PostData.comments ?? []);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setLiked((prev) => !prev);
    } catch (err) {
      console.error(err);
    }
  };

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

  /*Comment functionality*/
  const submitComment = async () => {
    if (!commentText.trim()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `http://localhost:3001/post/${PostData._id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: commentText }),
        },
      );
      const updatedPost = await res.json();
      setComments(updatedPost.comments);
      setCommentText("");
    } catch (err) {
      // Optimistic fallback when API is unavailable
      const newComment = {
        _id: Date.now().toString(),
        userName: "You",
        profilePic: PostData.profilePic,
        text: commentText,
        createdAt: "Just now",
        likes: 0,
      };
      setComments((prev) => [newComment, ...prev]);
      setCommentText("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitComment();
    }
  };

  return (
    <div className="postContainer">
      <div className="postContentContainer">
        <img
          src={PostData.profilePic}
          alt="Profile Picture"
          className="postProfilePic"
        />
        <div className="postRight">
          <div className="postHeader">
            <h4 className="postUserName">{PostData.postedBy}</h4>
            <span className="postTimeStamp"> · {timeAgo(PostData.createdAt)}</span>{" "}
          </div>
          <div className="postContent">{PostData.content}</div>
          <div className="postReactions">
            <div
              className={`postReaction ${showComments ? "postReactionActive" : ""}`}
              onClick={() => setShowComments((prev) => !prev)}
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
                  liked
                    ? "./imgs/homePage/heart (2).svg"
                    : "./imgs/homePage/heart.svg"
                }
                alt="like"
                className="postReactionIcon"
              />
              <p className="postReactionCount">({likes})</p>
            </div>
            <div className="postReaction" onClick={() => toggleShare()}>
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
      {/* ── Comment section ── */}
      {showComments && (
        <div className="postComments">
          <div className="postCommentCompose">
            <img
              className="postCommentsProfile"
              src={PostData.profilePic}
              alt="Your avatar"
            />
            <div className="postCommentInputWrapper">
              <textarea
                className="postCommentTextarea"
                placeholder="Write a comment…"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
              />
              <button
                className="postCommentSubmit"
                onClick={submitComment}
                disabled={!commentText.trim() || isSubmitting}
              >
                {isSubmitting ? "Posting…" : "Post"}
              </button>
            </div>
          </div>

          {comments.length === 0 ? (
            <p className="postNoComments">No comments yet. Be the first!</p>
          ) : (
            comments.map((comment) => (
              <Comment key={comment._id ?? comment.text} comment={comment} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
