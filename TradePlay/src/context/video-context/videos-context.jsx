import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getVideosFromAPI } from "../../server-request/server-requests";
import { videoReducer } from "./video-reducer";

const VideoContext = createContext();
const useVideos = () => useContext(VideoContext);
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );

  useEffect(async () => {
    getVideosFromAPI(videoDispatch);
  }, []);

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const initialVideoState = {
  videos: [],
  category: "",
};

export { useVideos, VideoProvider };
