import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;
  let currentState;
  let postData;
  
  beforeEach(() => {
    postData = {
      header: "Hello",
      timeStamp: "Sun Jun 14 2020",
      voteCount: 5,
      body: "My name is Johnny.",
      id: "dsfadsflkjasdlfkj",
    };
    currentState = {
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 5,
        body: "My name is Johnny.",
        id: "dsfadsflkjasdlfkj",
      },
    };
  });

  test("Should return default state if no action type is passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList", () => {
    const { header, timeStamp, voteCount, body, id } = postData;
    action = {
      type: "ADD_POST",
      header: header,
      timeStamp: timeStamp,
      voteCount: voteCount,
      body: body,
      id: id,
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        header: header,
        timeStamp: timeStamp,
        voteCount: voteCount,
        body: body,
        id: id,
      },
    });
  });

  test("Should increment voteCount by 1 when action is UPVOTE", () => {
    action = {
      type: "UPVOTE",
      id: "dsfadsflkjasdlfkj",
    };
    expect(postListReducer(currentState, action)).toEqual({
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 6,
        body: "My name is Johnny.",
        id: "dsfadsflkjasdlfkj",
      },
    });
  });

  test("Should decrement voteCount by 1 when action is DOWNVOTE", () => {
    action = {
      type: "DOWNVOTE",
      id: "dsfadsflkjasdlfkj",
    };
    expect(postListReducer(currentState, action)).toEqual({
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 4,
        body: "My name is Johnny.",
        id: "dsfadsflkjasdlfkj",
      },
    });
  });
});
