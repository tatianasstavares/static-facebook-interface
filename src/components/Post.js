import React from 'react';

function Post ({avatar, authorName, date, content}) {
          return (
            <div >
              <img src={avatar} alt="avatar"/>
              <p>
                {authorName} <span>{date}</span>
              </p>
              <p>{content}</p>
            </div>
          );
}

export default Post
