const addToHistory = (_id, videoDispatch) => {
  videoDispatch({ type: "ADD_TO_HISTORY", value: _id });
};

export { addToHistory };
