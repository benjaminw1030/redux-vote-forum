import * as c from "./ActionTypes";

export const addPost = (post) => {
  const { header, timeStamp, voteCount, body, id, formattedElapsedTime, elapsedTime } = post;
  return {
    type: c.ADD_POST,
    header: header,
    timeStamp: timeStamp,
    voteCount: voteCount,
    body: body,
    id: id,
    formattedElapsedTime: formattedElapsedTime,
    elapsedTime: elapsedTime,
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

export const updateTime = (id, formattedElapsedTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedElapsedTime: formattedElapsedTime,
});