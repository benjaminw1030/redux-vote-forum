import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { post, onUpvote, onDownvote } = props;

  return (
    <div>
      <h1>{post.header}</h1>
      <p><em>Date Posted: {post.timeStamp} - {post.formattedElapsedTime}</em></p>
      <p>Votes: {post.voteCount}</p>
      <p>{post.body}</p>
      <button onClick={() => onUpvote(post.id)}>Purr</button>
      <button onClick={() => onDownvote(post.id)}>Hiss</button>
      <hr/>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
}

export default Post;