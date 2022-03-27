import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "./playlist-reducer";

const PlaylistContext = createContext();
const usePlaylist = () => useContext(PlaylistContext);
const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialState
  );
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};
const initialState = {
  playlists: [
    {
      name: "favourites",
      description: "my favourite videos across all categories",
      videos: [],
    },
  ],
};

export { usePlaylist, PlaylistProvider };
