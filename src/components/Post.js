import React from "react";

function Post({ post }) {
  const {
    author: { avatar, name },
    content,
    date,
  } = post;
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <p>
        {name} <span>{date}</span>
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Post;
