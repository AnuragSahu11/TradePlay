const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.value };
    case "UPDATE_HISTORY":
      return { ...state, history: action.value };
    case "UPDATE_LIKED_VIDEOS":
      return {
        ...state,
        likes: action.value,
      };
    case "UPDATE_PLAYLISTS":
      return { ...state, playlists: action.value };
    case "UPDATE_WATCHLATER":
      return { ...state, watchlater: action.value };
  }
};
export { userDataReducer };
