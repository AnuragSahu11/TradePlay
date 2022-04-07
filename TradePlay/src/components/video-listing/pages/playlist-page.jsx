import { useEffect, useState } from "react";
import { usePlaylist } from "../../../context/playlist-context";
import { CreateNewPlaylistModal } from "../../modals/create-playlist-modal";
import { DeletePlaylistModal } from "../../modals/delete-playlist-modal";
import { SinglePlaylistComponent } from "./playlists";
import { changeTitle } from "../../../utils";

const PlaylistPage = () => {
  const { playlistState } = usePlaylist();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeletePlaylistModal, setShowDeletePlaylistModal] = useState(false);
  const switchShowDeletePlaylistModal = () => {
    setShowDeletePlaylistModal((prevState) => !prevState);
  };
  const createNewPlaylistclickHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  useEffect(() => changeTitle("Playlists"));
  return (
    <div className="playlist-page width-100">
      {isModalOpen && (
        <CreateNewPlaylistModal
          isModalOpen={isModalOpen}
          switchModal={setIsModalOpen}
        />
      )}
      {showDeletePlaylistModal && (
        <DeletePlaylistModal switchModal={switchShowDeletePlaylistModal} />
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
          <SinglePlaylistComponent name={item.name} action={"view"} />
        ))}
        <div className="btn-vertical m-up-6 center-x center-text">
          <button
            onClick={switchShowDeletePlaylistModal}
            className="btn-medium btn-custom fit-content btn-w-icon btn-secondary"
          >
            <i className="bx is-3 bxs-trash"></i>
            Delete Playlist
          </button>
        </div>
      </div>
    </div>
  );
};
export { PlaylistPage };
