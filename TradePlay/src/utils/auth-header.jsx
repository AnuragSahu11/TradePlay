const authHeader = (token) => {
  return { headers: { authorization: token } };
};

export { authHeader };
