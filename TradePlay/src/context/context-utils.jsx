const saveApiDataToContext = (state, value) => {
  return { ...state, videos: [...value] };
};

const changeCategory = (state, value) => {
  return { ...state, category: value };
};

const addToWatchLaterUtil = (state, value) => {
  return { ...state, watchlater: [...state.watchlater, value] };
};

const removeFromWatchLater = (state, value) => {
  return {
    ...state,
    watchlater: state.watchlater.filter((item) => item != value),
  };
};

const addToHistoryUtil = (state, value) => {
  return {
    ...state,
    history: [...state.history, value],
  };
};

const likeVideo = (state, value) => {
  return { ...state, like: [...state.like, value] };
};

const unLikeVideo = (state, value) => {
  return { ...state, like: [...state.like].filter((id) => !(id === value)) };
};

const createNewPlaylist = (state, name, desc) => {
  return {
    playlists: [
      ...state.playlists,
      { name: name, discription: desc, videos: [] },
    ],
  };
};

const addToPlaylist = (state, playlistName, id) => {
  if (
    state.playlists.reduce((acc, curr) => {
      if (curr.name === playlistName) {
        return curr.videos.includes(id);
      }
      return acc;
    }, false)
  ) {
    return { ...state };
  } else {
    return {
      playlists: [
        ...state.playlists.map((item) =>
          item.name === playlistName
            ? { ...item, videos: [...item.videos, id] }
            : item
        ),
      ],
    };
  }
};

export {
  saveApiDataToContext,
  changeCategory,
  createNewPlaylist,
  addToWatchLaterUtil,
  removeFromWatchLater,
  addToHistoryUtil,
  likeVideo,
  unLikeVideo,
  addToPlaylist,
};
