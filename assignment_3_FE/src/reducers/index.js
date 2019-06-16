import { combineReducers } from "redux";
import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE
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
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
};

export default combineReducers({
  messages: messageReducer
});
