import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "../actions";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => this.updatePostTime(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostTime() {
    const { dispatch } = this.props;
    Object.values(this.props.mainPostList).forEach((post) => {
      const newFormattedElapsedTime = post.elapsedTime.fromNow();
      const action = a.updateTime(post.id, newFormattedElapsedTime);
      dispatch(action);
    });
  }

  handleAddingNewPost = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const toggleAction = a.toggleForm();
    dispatch(toggleAction);
  };

  handleNewToggle = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleUpvote = (id) => {
    const { dispatch } = this.props;
    const action = a.upvote(id);
    dispatch(action);
  };

  handleDownvote = (id) => {
    const { dispatch } = this.props;
    const action = a.downvote(id);
    dispatch(action);
  };

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.props.makingNewPost) {
      visibleState = <NewPostForm onAddingPost={this.handleAddingNewPost} />;
      buttonText = "Go Back";
    } else {
      visibleState = (
        <PostList
          postList={this.props.mainPostList}
          onUpvoteClick={this.handleUpvote}
          onDownvoteClick={this.handleDownvote}
        />
      );
      buttonText = "Make Post";
    }
    return (
      <>
        {visibleState}
        <button onClick={this.handleNewToggle}>{buttonText}</button>
      </>
    );
  }
}

PostControl.propTypes = {
  mainPostList: PropTypes.object,
  makingNewPost: PropTypes.bool,
};

const sortByVote = (postList) => {
  const postArray = Object.entries(postList);
  const sortedArray = postArray.sort((a, b) => b[1].voteCount - a[1].voteCount);
  return Object.fromEntries(sortedArray);
};

const mapStateToProps = (state) => {
  const sortedList = sortByVote(state.mainPostList);
  return {
    mainPostList: sortedList,
    makingNewPost: state.makingNewPost,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
