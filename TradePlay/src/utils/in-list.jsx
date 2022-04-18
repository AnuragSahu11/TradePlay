const inList = (list, id) => {
  return list.reduce((acc, curr) => {
    if (!acc) {
      return curr._id === id;
    }
    return acc;
  }, false);
};

export { inList };
