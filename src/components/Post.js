import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { post, onUpvote, onDownvote } = props;

  return (
    <div>
      <h1>{post.postHeader}</h1>
      <p>Date Posted: {post.timeStamp}</p>
      <p>Votes: {post.voteCount}</p>
      <p>{post.postBody}</p>
      <button onclick={() => onUpvote(post.id)}>Upvote</button>
      <button onclick={() => onDownvote(post.id)}>Downvote</button>
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