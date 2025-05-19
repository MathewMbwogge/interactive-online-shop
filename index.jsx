import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Message from "./Message";

export default combineReducers({
  Authentication,
  Message,
});