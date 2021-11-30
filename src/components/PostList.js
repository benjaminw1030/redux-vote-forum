import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      {Object.values(props.postList).map((post) => 
        <Post post={post}
          onUpvote={props.onUpvoteClick}
          onDownvote={props.onDownvoteClick}
          key={post.id}/>
      )}
    </div>
  )
}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvoteClick: PropTypes.func,
  onDownvoteClick: PropTypes.func,
}

export default PostList;