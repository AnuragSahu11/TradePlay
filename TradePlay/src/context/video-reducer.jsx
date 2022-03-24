import {
  changeCategory,
  saveApiDataToContext,
  addToWatchLaterUtil,
  removeFromWatchLater,
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
  }
};

export { videoReducer };
