import { useAuth } from "../../context";
import { PlaylistList } from "../list/playlist-list";

const AddToPlaylistModal = ({
  isModalOpen,
  toggleModal,
  videoData,
  setLoading,
}) => {
  const {
    userDataState: { playlists },
    userDataDispatch,
  } = useAuth();

  const closeModal = () => {
    toggleModal();
  };

  return (
    <div className="add-to-playlist add-to-playlist-modal text-center">
      <button onClick={closeModal} className="card-cross btn-close is-medium">
        <i className="fas fa-times" />
      </button>
      {playlists.map((item) => (
        <PlaylistList
          action={"add"}
          videoData={videoData}
          playlistData={item}
          toggleModal={toggleModal}
          setLoading={setLoading}
        />
      ))}
    </div>
  );
};

export { AddToPlaylistModal };
