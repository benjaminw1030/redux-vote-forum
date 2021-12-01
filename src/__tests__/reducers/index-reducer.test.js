import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import postListReducer from "../../reducers/post-list-reducer";
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  
  test('Should return default state if no action is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainPostList: {},
      makingNewPost: false,
    });
  });

  test('Should match the initial state of postListReducer to rootReducer', () => {
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Should match the initial state of formVisibleReducer to rootReducer', () => {
    expect(store.getState().makingNewPost).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_POST action works for postListReducer and root reducer', () => {
    const action = {
      type: c.ADD_POST,
      header: 'Hello',
      timeStamp: 'Sun Jun 14 2020',
      voteCount: 5,
      body: 'My name is Rutiger.',
      id: 'dsfadsflkjasdlfkj'
    }
    store.dispatch(action);
    expect(store.getState().mainPostList).toEqual(postListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM,
    }
    store.dispatch(action);
    expect(store.getState().makingNewPost).toEqual(formVisibleReducer(undefined, action));
  });
});