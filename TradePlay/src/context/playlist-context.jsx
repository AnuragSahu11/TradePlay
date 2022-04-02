import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "./playlist-reducer";
import { v4 as uuid } from "uuid";

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
      id: uuid(),
      name: "favourites",
      description: "my favourite videos across all categories",
      videos: ["zSGCtoO4VJU", "K6DhhP3szJs"],
    },
  ],
};

export { usePlaylist, PlaylistProvider };
