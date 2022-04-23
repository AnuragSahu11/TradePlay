import { changeCategory } from "../utils";

const videoReducer = (state, action) => {
  switch (action.type) {
    case "VIDEOS_DATA":
      return { ...state, videos: action.value };
    case "CATEGORY_CHANGE":
      return changeCategory(state, action.value);
    case "CLEAR_FILTER":
      return changeCategory(state, "");
  }
};

export { videoReducer };
