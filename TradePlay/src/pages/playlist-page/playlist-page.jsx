import { useEffect, useState } from "react";
import { DeletePlaylistModal } from "../../components/modals/delete-playlist-modal";
import { changeTitle } from "../../utils";
import { PlaylistList } from "../../components";
import { CreateNewPlaylistModal } from "../../components/modals/create-playlist-modal";
import { useAuth } from "../../context";

const PlaylistPage = () => {
  const {
    userDataState: { playlists },
  } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeletetModal] = useState(false);

  const toggleDeleteModal = () => {
    setDeletetModal((prevState) => !prevState);
  };

  const createNewPlaylistclick = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  changeTitle("Playlists");

  return (
    <div className="playlist-page width-100">
      {isModalOpen && (
        <CreateNewPlaylistModal
          isModalOpen={isModalOpen}
          switchModal={setIsModalOpen}
        />
      )}
      {deleteModal && <DeletePlaylistModal switchModal={setDeletetModal} />}
      <div className="flex-c-w m-up-6 playlist-body ">
        <div
          onClick={createNewPlaylistclick}
          className="addToPlaylist pointer p-x-2 br-3 center-x create-playlist flex-row align-center is-4"
        >
          <i className="bx is-primary bx-plus is-5 m-r-1"></i>
          <p className="m-y-1 semibold">Create new Playlist</p>
        </div>
        {playlists.map((item) => (
          <PlaylistList action={"view"} playlistData={item} videoData={item} />
        ))}
        <div className="btn-vertical m-up-6 center-x center-text">
          <button
            onClick={toggleDeleteModal}
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
