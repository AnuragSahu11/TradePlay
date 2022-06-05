import axios from "axios";
import { API_URL, REDUCER_ACTION } from "../utils/constants";
import { authHeader } from "../utils/index";
import toast from "react-hot-toast";

const signUpUser = async (credentials) => {
  const { email, password, firstName, lastName } = credentials;
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      email,
      password,
      firstName,
      lastName,
    });
    navigate("/login");
    toast.success("Account created, Login to New Account");
  } catch (error) {
    toast.error("Sign up failed");
  }
};

const loginUser = async (credentials, dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}auth/login`, credentials);
    dispatch({ type: REDUCER_ACTION.SET_TOKEN, value: data.encodedToken });
    localStorage.setItem("token", data.encodedToken);
    toast.success("Login Successfull");
  } catch (err) {
    toast.error("Login Failed");
  }
};

const getVideosFromAPI = async (dispatch) => {
  const { data } = await axios.get(`${API_URL}videos`);
  dispatch({ type: REDUCER_ACTION.VIDEOS_DATA, value: data.videos });
};

const getVideoFromAPI = async (videoId, setVideoData) => {
  const { data } = await axios.get(`${API_URL}video/${videoId}`);
  setVideoData(data.video);
};

const addToHistory = async (video, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/history`,
      { video: video },
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_HISTORY, value: data.history });
  } catch (err) {}
};

const clearHistory = async (token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/history/all`,
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_HISTORY, value: data.history });
    toast.success("Cleared History");
  } catch (err) {
    toast.error("Cleared History");
  }
};

const removeFromHistory = async (videoId, token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/history/${videoId}`,
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_HISTORY, value: data.history });
    toast.success("Removed from history");
  } catch (err) {
    toast.error("Removed from history failed");
  }
};

const getLikedVideos = async (videoData, token, dispatch) => {
  const { data } = await axios.get(`${API_URL}user/likes`, authHeader(token));
  dispatch({ type: REDUCER_ACTION.UPDATE_LIKED_VIDEOS, value: data.likes });
};

const likeVideo = async (videoData, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/likes`,
      {
        video: videoData,
      },
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_LIKED_VIDEOS, value: data.likes });
    toast.success("Liked Video");
  } catch (err) {
    toast.error("Like Video Failed");
  }
};

const removeFromLikes = async (videoId, token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/likes/${videoId}`,
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_LIKED_VIDEOS, value: data.likes });
  } catch (err) {}
};

const getAllPlaylists = async (token, dispatch) => {
  const { data } = await axios.get(`${API_URL}user/playlists`);
};

const createPlaylist = async (playlistData, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/playlists`,
      { playlist: playlistData },
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_PLAYLISTS, value: data.playlists });
    toast.success("Playlist Created");
  } catch (err) {
    toast.error("Playlist Creation failed");
  }
};

const deletePlaylist = async (id, token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/playlists/${id}`,
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_PLAYLISTS, value: data.playlists });
    toast.success("Playlist Deleted");
  } catch (err) {
    toast.success("Delete Failed");
  }
};

const getPlaylist = async (id, token, setPlaylistData) => {
  const { data } = await axios.get(
    `${API_URL}user/playlists/${id}`,
    authHeader(token)
  );
  setPlaylistData(data.playlist);
};

const addToPlaylist = async (videoData, id, token) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/playlists/${id}`,
      { video: videoData },
      authHeader(token)
    );
    toast.success("Video Added to Playlist");
  } catch (err) {
    toast.error("Add to Playlist failed");
  }
};

const removeFromPlaylist = async (
  playlistId,
  videoId,
  token,
  setPlaylistData
) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/playlists/${playlistId}/${videoId}`,
      authHeader(token)
    );
    setPlaylistData(data.playlist);
    toast.success("Removed from Playlist");
  } catch (err) {
    toast.error("Remove from Playlist failed");
  }
};

const addToWatchLater = async (videoData, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `${API_URL}user/watchlater`,
      { video: videoData },
      authHeader(token)
    );
    dispatch({
      type: REDUCER_ACTION.UPDATE_WATCHLATER,
      value: data.watchlater,
    });
    toast.success("Added to Watchlater");
  } catch (err) {
    toast.error("Add to Watchlater failed");
  }
};

const getWatchLater = async (token, dispatch) => {
  const { data } = await axios.get(
    `${API_URL}user/watchlater`,
    authHeader(token)
  );
  dispatch({ type: REDUCER_ACTION.UPDATE_WATCHLATER, value: data.watchlater });
};

const removeFromWatchlater = async (videoId, token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `${API_URL}user/watchlater/${videoId}`,
      authHeader(token)
    );
    dispatch({
      type: REDUCER_ACTION.UPDATE_WATCHLATER,
      value: data.watchlater,
    });
    toast.success("Removed from Watchlater");
  } catch (err) {
    toast.error("Remove from Watchlater failed");
  }
};

export {
  signUpUser,
  loginUser,
  getVideosFromAPI,
  getVideoFromAPI,
  addToHistory,
  clearHistory,
  removeFromHistory,
  likeVideo,
  getLikedVideos,
  removeFromLikes,
  getAllPlaylists,
  createPlaylist,
  deletePlaylist,
  getPlaylist,
  addToPlaylist,
  removeFromPlaylist,
  addToWatchLater,
  getWatchLater,
  removeFromWatchlater,
};
