import React from "react";
import "./postitem.css";
const Posts = (props) => {
  return (
    <>
      <div className="post">
        <div className="post-content">;xcxcxcxc
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>
            {props.post.body}
            </div>
        </div>
        <div className="post_btn">
          <button>O'chirish</button>
        </div>
      </div>
    </>
  );
};
export default Posts;