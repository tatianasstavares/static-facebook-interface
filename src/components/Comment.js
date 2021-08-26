import React from "react";

function Comment({ comment }) {

    const {author: { avatar, authorName }, content } = comment
  return (
    <div>
      <img src={avatar} alt="profile" />
      <p>{authorName}</p>
      <p>{content}</p>
    </div>
  );
}
export default Comment;
