import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makingNewPost: false,
    }
  }

  handleNewToggle = () => {
    this.setState({ makingNewPost: !this.state.makingNewPost });
  }

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.state.makingNewPost) {
      visibleState = (
        <NewPostForm />
      );
      buttonText = "Go Back"
    } else {
      visibleState = (
        <PostList />
      )
      buttonText = "Make Post"
    }
    return (
      <>
        {visibleState}
        <button onClick={this.handleNewToggle}>{buttonText}</button>
      </>
    );
  };
};

export default PostControl;