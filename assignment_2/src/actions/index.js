export const addMessage = message => {
  return {
    type: "ADD_NEW_MESSAGE",
    payload: message
  };
};
