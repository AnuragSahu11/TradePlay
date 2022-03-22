import { useVideos } from "./videos-context";
import { saveApiDataToContext } from "./context-utils";

const videoReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_API_DATA":
      return saveApiDataToContext(state, action.value);
  }
};

export { videoReducer };
