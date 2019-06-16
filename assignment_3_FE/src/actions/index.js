export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const DELETE_MESSAGE_COMPLETE = 'DELETE_MESSAGE_COMPLETE';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

const sleep = milliseconds => {
  //artificially sleep so we can see that beautiful spinner
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

export const addMessage = message => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch('http://localhost:3000/messages', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        sleep(500).then(() => {
          dispatch(fetchMessagesSuccess(json));
          return json;
        });
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const getMessages = () => {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch('http://localhost:3000/messages')
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMessagesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const deleteMessage = uuid => {
  return async dispatch => {
    dispatch(fetchMessagesBegin());
    return fetch('http://localhost:3000/messages/' + uuid, {
      method: 'DELETE'
    })
      .then(dispatch(deleteMessageComplete(uuid)))
      .catch(error => dispatch(fetchMessagesFailure(error)));
  };
};

export const fetchMessagesBegin = () => {
  return {
    type: FETCH_MESSAGES_BEGIN
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

export const deleteMessageComplete = uuid => {
  return {
    type: DELETE_MESSAGE_COMPLETE,
    payload: {
      uuid
    }
  };
};

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: {
    error
  }
});
