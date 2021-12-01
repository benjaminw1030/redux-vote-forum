import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddingNewPost = (newPost) => {
    const { dispatch } = this.props;
    const { header, timeStamp, voteCount, body, id } = newPost;
    const action = {
      type: "ADD_POST",
      header: header,
      timeStamp: timeStamp,
      voteCount: voteCount,
      body: body,
      id: id,
    };
    dispatch(action);
    const toggleAction = {
      type: "TOGGLE_FORM",
    };
    dispatch(toggleAction);
  };

  handleNewToggle = () => {
    const { dispatch } = this.props;
    const action = {
      type: "TOGGLE_FORM",
    };
    dispatch(action);
  };

  handleUpvote = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "UPVOTE",
      id: id,
    };
    dispatch(action);
  }

  handleDownvote = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DOWNVOTE',
      id: id
    }
    dispatch(action);
  }

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.props.makingNewPost) {
      visibleState = <NewPostForm onAddingPost={this.handleAddingNewPost}/>;
      buttonText = "Go Back";
    } else {
      visibleState = <PostList postList={this.props.mainPostList} onUpvoteClick={this.handleUpvote} onDownvoteClick={this.handleDownvote} />;
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
  const sortedArray = postArray.sort((a, b) => b[1].voteCount - a[1].voteCount)
  return Object.fromEntries(sortedArray)
}

const mapStateToProps = (state) => {
  const sortedList = sortByVote(state.mainPostList);
  return {
    mainPostList: sortedList,
    makingNewPost: state.makingNewPost,
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
