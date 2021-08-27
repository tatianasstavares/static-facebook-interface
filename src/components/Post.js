import React from "react";
import Comment from "./Comment";
import postStyle from "../style/Post.module.css";

function Post({ post }) {
  const {
    author: { avatar, name },
    content,
    date,
  } = post;
  return (
    <div className={postStyle.postBackground}>
      <div className={postStyle.postContainer}>
        <section className={postStyle.PostCard}>
          <div className={postStyle.postTitle}>
            <img src={avatar} alt="avatar" />
            <p>
              {name} <span>{date}</span>
            </p>
          </div>
          <p>{content}</p>
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Post;
