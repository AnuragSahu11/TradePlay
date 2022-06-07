export const API_URL = "/api/";

export const initialUserData = {
  token: localStorage.getItem("token") || null,
  history: [],
  playlists: [],
  likes: [],
  watchlater: [],
};

export const loggedOutUserData = {
  token: null,
  history: [],
  playlists: [],
  likes: [],
  watchlater: [],
};

export const REDUCER_ACTION = {
  SET_TOKEN: "SET_TOKEN",
  UPDATE_HISTORY: "UPDATE_HISTORY",
  UPDATE_LIKED_VIDEOS: "UPDATE_LIKED_VIDEOS",
  UPDATE_PLAYLISTS: "UPDATE_PLAYLISTS",
  UPDATE_WATCHLATER: "UPDATE_WATCHLATER",
  VIDEOS_DATA: "VIDEOS_DATA",
  CATEGORY_CHANGE: "CATEGORY_CHANGE",
  CLEAR_FILTER: "CLEAR_FILTER",
  LOGOUT: "LOGOUT_USER",
};

export const loaderSizeLarge = { width: "60px", height: "60px" };
export const loaderSizeMedium = { width: "32px", height: "32px" };

export const demoCredentials = {
  email: "anurag@gmail.com",
  password: "anurag",
};
