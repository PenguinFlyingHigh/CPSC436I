export const FETCH_MESSAGES_BEGIN = "FETCH_MESSAGES_BEGIN";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const ADD_MESSAGES_SUCCESS = "ADD_MESSAGES_SUCCESS";
export const DELETE_MESSAGE_COMPLETE = "DELETE_MESSAGE_COMPLETE";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";
export const NUKE_MESSAGE_COMPLETE = "NUKE_MESSAGE_COMPLETE";
export const EDIT_MESSAGES_SUCCESS = "EDIT_MESSAGES_SUCCESS";

const api_url =
  process.env.NODE_ENV === "production"
    ? "https://server-dot-spilled-the-beans.appspot.com"
    : "http://localhost:3000";

const sleep = milliseconds => {
  //artificially sleep so we can see that beautiful spinner
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const addMessage = message => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch(api_url + "/messages", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        sleep(500).then(() => {
          dispatch(addMessagesSuccess(json));
        });
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const getMessages = () => {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch(api_url + "/messages")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMessagesSuccess(json));
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const deleteMessage = uuid => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch(api_url + "/messages/" + uuid, {
      method: "DELETE"
    })
      .then(dispatch(deleteMessageComplete(uuid)))
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const nukeMessages = () => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch(api_url + "/messages", {
      method: "DELETE"
    })
      .then(dispatch(nukeMessagesComplete()))
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const editMessage = (editedMessage, uuid) => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch(api_url + "/messages/" + uuid, {
      method: "PUT",
      body: JSON.stringify(editedMessage),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        sleep(500).then(() => {
          dispatch(editMessageSuccess(json, uuid));
        });
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const fetchMessagesBegin = () => {
  return {
    type: FETCH_MESSAGES_BEGIN
  };
};

export const addMessagesSuccess = messages => {
  return {
    type: ADD_MESSAGES_SUCCESS,
    payload: {
      messages
    }
  };
};

export const fetchMessagesSuccess = messages => {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    payload: {
      messages
    }
  };
};

export const editMessageSuccess = (message, uuid) => {
  return {
    type: EDIT_MESSAGES_SUCCESS,
    payload: {
      message,
      uuid
    }
  };
};

export const deleteMessageComplete = uuid => {
  return {
    type: DELETE_MESSAGE_COMPLETE,
    payload: {
      uuid
    }
  };
};

export const nukeMessagesComplete = () => {
  return {
    type: NUKE_MESSAGE_COMPLETE
  };
};

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: {
    error
  }
});
