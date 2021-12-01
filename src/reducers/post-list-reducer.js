import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { header, timeStamp, voteCount, body, id } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          header: header,
          timeStamp: timeStamp,
          voteCount: voteCount,
          body: body,
          id: id,
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
    default:
      return state;
  }
};