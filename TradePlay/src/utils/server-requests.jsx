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
  const { data } = await axios.delete(
    `${API_URL}user/history/${videoId}`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_HISTORY", value: data.history });
};

const getLikedVideos = async (videoData, token, dispatch) => {
  const { data } = await axios.get(`${API_URL}user/likes`, authHeader(token));
  dispatch({ type: "UPDATE_LIKED_VIDEOS", value: data.likes });
};

const likeVideo = async (videoData, token, dispatch) => {
  const { data } = await axios.post(
    `${API_URL}user/likes`,
    {
      video: videoData,
    },
    authHeader(token)
  );
  dispatch({ type: "UPDATE_LIKED_VIDEOS", value: data.likes });
};

const removeFromLikes = async (videoId, token, dispatch) => {
  const { data } = await axios.delete(
    `${API_URL}user/likes/${videoId}`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_LIKED_VIDEOS", value: data.likes });
};

const getAllPlaylists = async (token, dispatch) => {
  const { data } = await axios.get(`${API_URL}user/playlists`);
};

const createPlaylist = async (playlistData, token, dispatch) => {
  const { data } = await axios.post(
    `${API_URL}user/playlists`,
    { playlist: playlistData },
    authHeader(token)
  );
  dispatch({ type: "UPDATE_PLAYLISTS", value: data.playlists });
};

const deletePlaylist = async (id, token, dispatch) => {
  const { data } = await axios.delete(
    `${API_URL}user/playlists/${id}`,
    authHeader(token)
  );

  dispatch({ type: "UPDATE_PLAYLISTS", value: data.playlists });
};

const getPlaylist = async (id, token, setPlaylistData) => {
  const { data } = await axios.get(
    `${API_URL}user/playlists/${id}`,
    authHeader(token)
  );
  setPlaylistData(data.playlist);
};

const addToPlaylist = async (videoData, id, token) => {
  const { data } = await axios.post(
    `${API_URL}user/playlists/${id}`,
    { video: videoData },
    authHeader(token)
  );
};

const removeFromPlaylist = async (
  playlistId,
  videoId,
  token,
  setPlaylistData
) => {
  const { data } = await axios.delete(
    `${API_URL}user/playlists/${playlistId}/${videoId}`,
    authHeader(token)
  );
  setPlaylistData(data.playlist);
};

const addToWatchLater = async (videoData, token, dispatch) => {
  console.log(videoData);
  const { data } = await axios.post(
    `${API_URL}user/watchlater`,
    { video: videoData },
    authHeader(token)
  );
  dispatch({ type: "UPDATE_WATCHLATER", value: data.watchlater });
};

const getWatchLater = async (token, dispatch) => {
  const { data } = await axios.get(
    `${API_URL}user/watchlater`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_WATCHLATER", value: data.watchlater });
};

const removeFromWatchlater = async (videoId, token, dispatch) => {
  const { data } = await axios.delete(
    `${API_URL}user/watchlater/${videoId}`,
    authHeader(token)
  );
  dispatch({ type: "UPDATE_WATCHLATER", value: data.watchlater });
};

export {
  loginUser,
  getVideosFromAPI,
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
