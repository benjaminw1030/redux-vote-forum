import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

const currentDate = new Date(Date.now()).toString();

function NewPostForm(props) {

  function newPostFormSubmission(event) {
    event.preventDefault();
    props.onAddingPost({ header: event.target.postHeader.value, body: event.target.postBody.value, id: v4(), voteCount: 0, timeStamp: currentDate })
  }

  return (
    <div>
      <h1>New Post Form</h1>
      <form onSubmit={newPostFormSubmission}>
      <input
          type='text'
          name='postHeader'
          placeholder='post header' />
        <br/>
        <input
          type='text'
          name='postBody'
          placeholder='write your post here' />
        <br/>
        <button type='submit'>Create Post</button>
      </form>
    </div>
    
  );
}

NewPostForm.propTypes = {
  onAddingPost: PropTypes.func
};

//timestamps
//votecount = 0
export default NewPostForm;