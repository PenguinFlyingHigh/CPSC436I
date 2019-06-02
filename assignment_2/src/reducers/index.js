import { combineReducers } from "redux";

const initial_message = [
  "This is one of those awesome messages.",
  "Oh look, another awesome message.",
  "Real funny."
];
const messageReducer = (messages = initial_message, action) => {
  if (action.type === "ADD_NEW_MESSAGE") {
    return messages.concat(action.payload);
  }
  return messages;
};

export default combineReducers({
  messages: messageReducer
});
