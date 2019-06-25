import { combineReducers } from "redux";
import {
  FETCH_MESSAGES_BEGIN,
  DELETE_MESSAGE_COMPLETE,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  NUKE_MESSAGE_COMPLETE,
  EDIT_MESSAGES_SUCCESS
} from "../actions/index.js";

const initialState = {
  messages: [],
  loading: false,
  error: null
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case DELETE_MESSAGE_COMPLETE:
      return {
        ...state,
        loading: false,
        error: null,
        messages: state.messages.filter(
          message => message.uuid !== action.payload.uuid
        )
      };

    case NUKE_MESSAGE_COMPLETE:
      return {
        ...state,
        loading: false,
        error: null,
        messages: []
      };

    case EDIT_MESSAGES_SUCCESS:
      let index = state.messages.findIndex(
        message => message.uuid === action.payload.uuid
      );
      state.messages[index].message = action.payload.message.message;
      state.messages[index].name = action.payload.message.name;
      state.messages[index].timestamp = action.payload.message.timestamp;

      return {
        ...state,
        loading: false,
        error: null
      };

    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        messages: state.messages.concat(action.payload.messages)
      };

    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default combineReducers({
  messages: messageReducer
});
