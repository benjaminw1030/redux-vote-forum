import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  const postListStyles = {
    backgroundColor: "pink",
    fontFamily: "arial",
    paddingTop: "10px",
  };
  return (
    <div style={postListStyles}>
      {Object.values(props.postList).map((post) => {
        return (
          <Post
            post={post}
            onUpvote={props.onUpvoteClick}
            onDownvote={props.onDownvoteClick}
            key={post.id}
          />
        );
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvoteClick: PropTypes.func,
  onDownvoteClick: PropTypes.func,
};

export default PostList;