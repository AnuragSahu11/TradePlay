import axios from "axios";
import { API_URL } from ".";
import { authHeader } from "./auth-header";

const loginUser = async (credentials, dispatch) => {
  const { data } = await axios.post(`${API_URL}auth/login`, credentials);
  dispatch({ type: "SET_TOKEN", value: data.encodedToken });
  localStorage.setItem("token", data.encodedToken);
};

const getVideosFromAPI = async (dispatch) => {
  const { data } = await axios.get(`${API_URL}videos`);
  dispatch({ type: "VIDEOS_DATA", value: data.videos });
  console.log(data.videos);
};

const addToHistory = async (video, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/history`,
      { video: video },
      authHeader(token)
    );
    dispatch({ type: "UPDATE_HISTORY", value: data.history });
  } catch (err) {
    console.log(err);
  }
};

const clearHistory = async (token, dispatch) => {
  const { data } = await axios.delete(
    `${API_URL}user/history/all`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_HISTORY", value: data.history });
};

const removeFromHistory = async (videoId, token, dispatch) => {
  console.log(videoId, "h");
  const { data } = await axios.delete(
    `${API_URL}user/history/${videoId}`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_HISTORY", value: data.history });
};

export {
  loginUser,
  getVideosFromAPI,
  addToHistory,
  clearHistory,
  removeFromHistory,
};
