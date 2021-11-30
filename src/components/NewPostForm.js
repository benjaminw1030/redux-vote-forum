import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types'

function NewPostForm() {
  return (
    <div>
      <h1>New Post Form</h1>
      <form>
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
  //function passed in from postcontrol
};

//timestamps
//votecount = 0
export default NewPostForm;