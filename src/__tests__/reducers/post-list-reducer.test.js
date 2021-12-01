import postListReducer from "../../reducers/post-list-reducer";
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

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
      elapsedTime: 0,
      id: "dsfadsflkjasdlfkj",
    };
    currentState = {
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 5,
        body: "My name is Johnny.",
        elapsedTime: 0,
        id: "dsfadsflkjasdlfkj",
      },
    };
  });

  test("Should return default state if no action type is passed into reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to mainPostList with Moment-format time", () => {
    const { header, timeStamp, voteCount, body, elapsedTime, id } = postData;
    action = {
      type: c.ADD_POST,
      header: header,
      timeStamp: timeStamp,
      voteCount: voteCount,
      body: body,
      elapsedTime: elapsedTime,
      id: id,
      formattedElapsedTime: new Moment().fromNow()
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        header: header,
        timeStamp: timeStamp,
        voteCount: voteCount,
        body: body,
        elapsedTime: elapsedTime,
        id: id,
        formattedElapsedTime: 'a few seconds ago',
      },
    });
  });

  test("Should increment voteCount by 1 when action is UPVOTE", () => {
    action = {
      type: c.UPVOTE,
      id: "dsfadsflkjasdlfkj",
    };
    expect(postListReducer(currentState, action)).toEqual({
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 6,
        body: "My name is Johnny.",
        elapsedTime: 0,
        id: "dsfadsflkjasdlfkj",
      },
    });
  });

  test("Should decrement voteCount by 1 when action is DOWNVOTE", () => {
    action = {
      type: c.DOWNVOTE,
      id: "dsfadsflkjasdlfkj",
    };
    expect(postListReducer(currentState, action)).toEqual({
      dsfadsflkjasdlfkj: {
        header: "Hello",
        timeStamp: "Sun Jun 14 2020",
        voteCount: 4,
        body: "My name is Johnny.",
        elapsedTime: 0,
        id: "dsfadsflkjasdlfkj",
      },
    });
  });

  test('should add formatted time elapsed to post', () => {
    const { header, timeStamp, voteCount, body, elapsedTime, id } = postData;
    action = {
      type : c.UPDATE_TIME,
      formattedElapsedTime: '1 minute ago',
      id: id
    };
    expect(postListReducer({ [id]: postData }, action)).toEqual({
      [id]: {
        header: header,
        timeStamp: timeStamp,
        voteCount: voteCount,
        body: body,
        elapsedTime: elapsedTime,
        id: id,
        formattedElapsedTime: '1 minute ago'
      }
    });
  });
});
