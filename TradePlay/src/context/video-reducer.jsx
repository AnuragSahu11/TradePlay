import {
  changeCategory,
  saveApiDataToContext,
  addToWatchLaterUtil,
  removeFromWatchLater,
  addToHistoryUtil,
  likeVideo,
  unLikeVideo,
  clearHistory,
  removeFromHistory,
  addNotes,
  editNotes,
  deleteNotes,
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
    case "REMOVE_FROM_HISTORY":
      return removeFromHistory(state, action.value);
    case "CLEAR_HISTORY":
      return clearHistory(state);
    case "LIKE_VIDEO":
      return likeVideo(state, action.value);
    case "UNLIKE_VIDEO":
      return unLikeVideo(state, action.value);
    case "CLEAR_FILTER":
      return changeCategory(state, "");
    case "ADD_NOTE":
      return addNotes(
        state,
        action.value.noteData.title,
        action.value.noteData.content,
        action.value.currentVideoId
      );
    case "EDIT_NOTE":
      return editNotes(
        state,
        action.value.noteData.title,
        action.value.noteData.content,
        action.value.currentVideoId,
        action.value.noteId
      );
    case "DELETE_NOTE":
      return deleteNotes(
        state,
        action.value.currentVideoId,
        action.value.noteId
      );
  }
};

export { videoReducer };
