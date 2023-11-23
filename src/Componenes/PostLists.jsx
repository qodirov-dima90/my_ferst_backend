import React from "react";
import PostItem from "./PostItem";

const PostLists = ({posts, title}) => {
 
  return (
    <>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostLists;
