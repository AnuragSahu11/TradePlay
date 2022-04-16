const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.value };
    case "UPDATE_HISTORY":
      return { ...state, history: action.value };
  }
};
export { userDataReducer };
