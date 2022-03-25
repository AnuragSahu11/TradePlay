import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "./video-reducer";

const VideoContext = createContext();
const useVideos = () => useContext(VideoContext);
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const initialVideoState = { videos: [], category: "", watchlater: [] };

export { useVideos, VideoProvider };
