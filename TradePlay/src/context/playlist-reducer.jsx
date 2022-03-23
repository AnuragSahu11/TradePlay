import { addToPlaylist } from "./context-utils";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYLIST":
      return addToPlaylist(value);
    case "REMOVE_PLAYLIST":
      return;
    case "ADD_VIDEO_TO_PLAYLIST":
      return;
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return;
  }
};
export { playlistReducer };
