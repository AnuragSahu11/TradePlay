import { REDUCER_ACTION } from "../../utils/constants";

const userDataReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION.SET_TOKEN:
      return { ...state, token: action.value };
    case REDUCER_ACTION.UPDATE_HISTORY:
      return { ...state, history: action.value };
    case REDUCER_ACTION.UPDATE_LIKED_VIDEOS:
      return {
        ...state,
        likes: action.value,
      };
    case REDUCER_ACTION.UPDATE_PLAYLISTS:
      return { ...state, playlists: action.value };
    case REDUCER_ACTION.UPDATE_WATCHLATER:
      return { ...state, watchlater: action.value };
  }
};
export { userDataReducer };
