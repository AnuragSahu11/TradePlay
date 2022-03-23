const saveApiDataToContext = (state, value) => {
  return { ...state, videos: [...value] };
};

export { saveApiDataToContext };
