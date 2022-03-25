import {
  changeCategory,
  saveApiDataToContext,
  addToWatchLaterUtil,
  removeFromWatchLater,
  addToHistoryUtil,
  likeVideo,
  unLikeVideo,
} from "./context-utils";

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_API_DATA":
      return saveApiDataToContext(state, action.value);
    case "CATEGORY_CHANGE":
      return changeCategory(state, action.value);
    case "ADD_TO_WATCHLATER":
      return addToWatchLaterUtil(state, action.value);
    case "REMOVE_FROM_WATCHLATER":
      return removeFromWatchLater(state, action.value);
    case "ADD_TO_HISTORY":
      return addToHistoryUtil(state, action.value);
    case "LIKE_VIDEO":
      return likeVideo(state, action.value);
    case "UNLIKE_VIDEO":
      return unLikeVideo(state, action.value);
  }
};

export { videoReducer };
