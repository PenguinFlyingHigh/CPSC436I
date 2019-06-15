import { combineReducers } from "redux";

const initial_message = [
  {
    message: "This is one of those awesome messages.",
    name: "Jimmy",
    timestamp: "Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)"
  },
  {
    message: "Oh look, another awesome message.",
    name: "Queen",
    timestamp: "Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)"
  },
  {
    message: "Funny.",
    name: "Not",
    timestamp: "Tue May 21 2019 00:10:52 GMT-0700 (Pacific Daylight Time)"
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
