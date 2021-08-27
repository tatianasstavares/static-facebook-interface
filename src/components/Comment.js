import React from "react";
import postStyle from "../style/Post.module.css";

function Comment({ comment }) {
  const {
    author: { avatar, name },
    content,
  } = comment;
  return (
    <section className={postStyle.commentsContainer}>
      <img src={avatar} alt="profile" />
      <div className={postStyle.infoPost}>
        <p>
          {name} <span>{content}</span>
        </p>
      </div>
    </section>
  );
}
export default Comment;
