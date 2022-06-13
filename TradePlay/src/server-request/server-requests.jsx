import axios from "axios";
import { API_URL, REDUCER_ACTION } from "../utils/constants";
import toast from "react-hot-toast";
import { authHeader } from "./auth-header";

const signUpUser = async (credentials, setLoading) => {
  const { email, password, firstName, lastName } = credentials;
  setLoading(true);
  try {
    const { data } = await axios.post(`/api/auth/signup`, {
      email,
      password,
      firstName,
      lastName,
    });
    toast.success("Account created, Login to New Account");
  } catch (error) {
    toast.error("Sign up failed");
    setLoading(false);
    throw error;
  }
  setLoading(false);
};

const loginUser = async (credentials, dispatch, setLoading) => {
  setLoading(true);
  try {
    const { data } = await axios.post(`${API_URL}auth/login`, credentials);
    dispatch({ type: REDUCER_ACTION.SET_TOKEN, value: data.encodedToken });
    localStorage.setItem("token", data.encodedToken);
    toast.success("Login Successfull");
  } catch (err) {
    toast.error("Login Failed");
  }
  setLoading(false);
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

const likeVideo = async (videoData, token, dispatch, setLoading) => {
  setLoading(true);
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
  setLoading(false);
};

const removeFromLikes = async (videoId, token, dispatch, setLoading) => {
  setLoading(true);
  try {
    const { data } = await axios.delete(
      `${API_URL}user/likes/${videoId}`,
      authHeader(token)
    );
    dispatch({ type: REDUCER_ACTION.UPDATE_LIKED_VIDEOS, value: data.likes });
  } catch (err) {}
  setLoading(false);
};

const getAllPlaylists = async (token, dispatch) => {
  const { data } = await axios.get(
    `${API_URL}user/playlists`,
    authHeader(token)
  );
  dispatch({ type: REDUCER_ACTION.UPDATE_PLAYLISTS, value: data.playlists });
};

const createPlaylist = async (
  playlistData,
  token,
  dispatch,
  setPageLoading
) => {
  setPageLoading(true);
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
  setPageLoading(false);
};

const deletePlaylist = async (id, token, dispatch, setPageLoading) => {
  setPageLoading(true);
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
  setPageLoading(false);
};

const getPlaylist = async (
  id,
  token,
  setPlaylistData,
  setLoading,
  navigate
) => {
  setLoading(true);
  try {
    const { data } = await axios.get(
      `${API_URL}user/playlists/${id}`,
      authHeader(token)
    );
    setPlaylistData(data.playlist);
    if (!data.playlist) {
      toast.error("Playlist not found");
      navigate("/videoListing/playlist");
    }
  } catch (err) {}
  setLoading(false);
};

const addToPlaylist = async (videoData, id, token, setLoading) => {
  setLoading(true);
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
  setLoading(false);
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

const addToWatchLater = async (videoData, token, dispatch, setLoading) => {
  setLoading(true);
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
  setLoading(false);
};

const getWatchLater = async (token, dispatch) => {
  const { data } = await axios.get(
    `${API_URL}user/watchlater`,
    authHeader(token)
  );
  dispatch({ type: REDUCER_ACTION.UPDATE_WATCHLATER, value: data.watchlater });
};

const removeFromWatchlater = async (videoId, token, dispatch, setLoading) => {
  setLoading(true);
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
  setLoading(false);
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
