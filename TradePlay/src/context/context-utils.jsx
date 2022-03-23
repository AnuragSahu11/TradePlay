const saveApiDataToContext = (state, value) => {
  return { ...state, videos: [...value] };
};

const changeCategory = (state, value) => {
  return { ...state, category: value };
};

const addToPlaylist = (state, value) => {
  return [...state, { [value]: [] }];
};

const addToWatchLaterUtil = (state, value) => {
  return { ...state, watchlater: [...state.watchlater, value] };
};

export {
  saveApiDataToContext,
  changeCategory,
  addToPlaylist,
  addToWatchLaterUtil,
};
