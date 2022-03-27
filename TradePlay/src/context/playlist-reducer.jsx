import { addToPlaylist } from "./context-utils";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return addToPlaylist(value);
    case "REMOVE_PLAYLIST":
      return;
    case "ADD_TO_PLAYLIST":
      return;
    case "REMOVE_FROM_PLAYLIST":
      return;
  }
};
export { playlistReducer };
