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

const addToPlaylist = (state, value) => {
  return {
    ...state,
    playlists: [
      ...state.playlists,
      { title: value.name, discription: value.desc, videos: [] },
    ],
  };
};

export {
  saveApiDataToContext,
  changeCategory,
  addToPlaylist,
  addToWatchLaterUtil,
  removeFromWatchLater,
  addToHistoryUtil,
  likeVideo,
  unLikeVideo,
};
