export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const addMessage = message => {
  return async dispatch => {
    dispatch(fetchMessagesBegin())
    return fetch("http://localhost:3000/messages", {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMessagesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  }
};

export const getMessages = () => {
  return dispatch => {
    dispatch(fetchMessagesBegin())
    return fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMessagesSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchMessagesFailure(error)));
  }
}

export const fetchMessagesBegin = () => {
  return {
    type: FETCH_MESSAGES_BEGIN
  }
};

export const fetchMessagesSuccess = messages => {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    payload: {
      messages
    }
  }
};

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: {
    error
  }
});