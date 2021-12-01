export default (state = {}, action) => {
  const { header, timeStamp, voteCount, body, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          header: header,
          timeStamp: timeStamp,
          voteCount: voteCount,
          body: body,
          id: id,
        },
      });
    case "UPVOTE":
      let newState1 = { ...state };
      newState1[id].voteCount++;
      return newState1;
    case "DOWNVOTE":
      let newState2 = { ...state };
      newState2[id].voteCount--;
      return newState2;
    default:
      return state;
  }
};

//header
//timeStamp
//voteCount
//body
//id
