const inList = (list, id) => {
  return list.reduce((acc, curr) => {
    if (!acc) {
      return curr === id;
    }
    return acc;
  }, false);
};

export { inList };
