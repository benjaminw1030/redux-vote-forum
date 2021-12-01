import formVisibleReducer from "./form-visible-reducer";
import postListReducer from "./post-list-reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  mainPostList: postListReducer,
  makingNewPost: formVisibleReducer
})

export default rootReducer;