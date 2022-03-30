import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getApiData } from "../utils/get-api-data";
import { videoReducer } from "./video-reducer";

const VideoContext = createContext();
const useVideos = () => useContext(VideoContext);
const VideoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  useEffect(async () => {
    setIsLoading(true);
    getApiData(videoDispatch);
    setIsLoading(false);
  }, []);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch, isLoading }}>
      {children}
    </VideoContext.Provider>
  );
};

const initialVideoState = {
  videos: [],
  category: "",
  watchlater: [],
  history: [],
  like: [],
};

export { useVideos, VideoProvider };
