import React from "react";
import postStyle from "../style/Post.module.css";

function Comment({ comment }) {
  const {
    author: { avatar, authorName },
    content,
  } = comment;
  return (
    <div>
      <img src={avatar} alt="profile" />
      <p>{authorName}</p>
      <p>{content}</p>
    </div>
  );
}
export default Comment;
