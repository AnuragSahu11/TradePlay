import { AddToPlaylistModal } from "../utils/add-to-playlist-modal";
import { createNewPlaylist } from "./context-utils";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PLAYLIST":
      return createNewPlaylist(state, action.value.name, action.value.desc);
    case "REMOVE_PLAYLIST":
      return;
    case "ADD_TO_PLAYLIST":
      return AddToPlaylistModal(state);
    case "REMOVE_FROM_PLAYLIST":
      return;
  }
};
export { playlistReducer };
