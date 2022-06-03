import { changeCategory } from "../../utils";
import { REDUCER_ACTION } from "../../utils/constants";

const videoReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION.VIDEOS_DATA:
      return { ...state, videos: action.value };
    case REDUCER_ACTION.CATEGORY_CHANGE:
      return changeCategory(state, action.value);
    case REDUCER_ACTION.CLEAR_FILTER:
      return changeCategory(state, "");
  }
};

export { videoReducer };
