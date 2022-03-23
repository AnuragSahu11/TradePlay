import { useVideos } from "./videos-context";
import {
  changeCategory,
  saveApiDataToContext,
  addToWatchLater,
  addToWatchLaterUtil,
} from "./context-utils";

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_API_DATA":
      return saveApiDataToContext(state, action.value);
    case "CATEGORY_CHANGE":
      return changeCategory(state, action.value);
    case "ADD_TO_WATCHLATER":
      return addToWatchLaterUtil(state, action.value);
  }
};

export { videoReducer };
