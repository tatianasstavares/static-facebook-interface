import React from "react";
import Comment from "./Comment";

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
      {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
    </div>
  );
}

export default Post;
