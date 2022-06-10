const saveApiDataToContext = (state, value) => {
  return { ...state, videos: [...value] };
};

const changeCategory = (state, value) => {
  return { ...state, category: value };
};

export { saveApiDataToContext, changeCategory };
