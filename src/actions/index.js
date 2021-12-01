import * as c from './ActionTypes'

export const addPost = (post) => {
  const { header, timeStamp, voteCount, body, id } = post;
  return {
    type: c.ADD_POST,
    header: header,
    timeStamp: timeStamp,
    voteCount: voteCount,
    body: body,
    id: id,
  };
};

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM,
  };
};

export const upvote = (id) => {
  return {
    type: c.UPVOTE,
    id,
  };
};

export const downvote = (id) => {
  return {
    type: c.DOWNVOTE,
    id,
  };
};