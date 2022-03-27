import { useState } from "react";
import { usePlaylist } from "../../../context/playlist-context";
import { CreateNewPlaylistModal } from "../../../utils/create-playlist-modal";
import { Playlists } from "./playlists";

const Playlist = () => {
  const { playlistState } = usePlaylist();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createNewPlaylistclickHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className="playlist-page width-100">
      {isModalOpen && (
        <CreateNewPlaylistModal
          isModalOpen={isModalOpen}
          switchModal={setIsModalOpen}
        />
      )}
      <div className="flex-c-w m-up-6 playlist-body ">
        <div
          onClick={createNewPlaylistclickHandler}
          className="addToPlaylist pointer p-x-2 br-3 center-x create-playlist flex-row align-center is-4"
        >
          <i className="bx is-primary bx-plus is-5 m-r-1"></i>
          <p className="m-y-1 semibold">Create new Playlist</p>
        </div>
        {playlistState.playlists.map((item) => (
          <Playlists playlistData={item} name={item.name} />
        ))}
      </div>
    </div>
  );
};
export { Playlist };
