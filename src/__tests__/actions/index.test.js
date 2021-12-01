import * as a from "../../actions";
import * as c from "../../actions/ActionTypes";

describe("forum actions", () => {
  test("addPost should create ADD_POST action", () => {
    expect(
      a.addPost({
        header: "test",
        timeStamp: "time",
        voteCount: 0,
        body: "test",
        id: "5",
      })
    ).toEqual({
      type: c.ADD_POST,
      header: "test",
      timeStamp: "time",
      voteCount: 0,
      body: "test",
      id: "5",
    });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({ type: c.TOGGLE_FORM })
  })

  test('upvote should create UPVOTE action', () => {
    expect(a.upvote("5")).toEqual({ type: c.UPVOTE, id: "5" })
  })

  test('downvote should create DOWNVOTE action', () => {
    expect(a.downvote('5')).toEqual({ type: c.DOWNVOTE, id: '5'})
  })
});