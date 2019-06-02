import { combineReducers } from "redux";

const initial_message = [
  {
    message: "This is one of those awesome messages.",
    name: "Jimmy"
  },
  {
    message: "Oh look, another awesome message.",
    name: "Queen"
  },
  {
    message: "Funny.",
    name: "Not"
  }
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
