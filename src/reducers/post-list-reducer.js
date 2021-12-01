import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  const { header, timeStamp, voteCount, body, id, formattedElapsedTime, elapsedTime } =
    action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          header: header,
          timeStamp: timeStamp,
          voteCount: voteCount,
          body: body,
          id: id,
          elapsedTime: elapsedTime,
          formattedElapsedTime: formattedElapsedTime,
        },
      });
    case c.UPVOTE:
      let newState1 = { ...state };
      newState1[id].voteCount++;
      return newState1;
    case c.DOWNVOTE:
      let newState2 = { ...state };
      newState2[id].voteCount--;
      return newState2;
    case c.UPDATE_TIME:
      const newPost = Object.assign({}, state[id], { formattedElapsedTime });
      const updatedState = Object.assign({}, state, { [id]: newPost });
      return updatedState;
    default:
      return state;
  }
};
