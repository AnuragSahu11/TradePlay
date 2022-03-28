import { addToPlaylist } from "./context-utils";
import { createNewPlaylist } from "./context-utils";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return createNewPlaylist(state, action.value.name, action.value.desc);
    case "REMOVE_PLAYLIST":
      return;
    case "ADD_TO_PLAYLIST":
      return addToPlaylist(state, action.value.name, action.value.id);
    case "REMOVE_FROM_PLAYLIST":
      return;
  }
};
export { playlistReducer };
