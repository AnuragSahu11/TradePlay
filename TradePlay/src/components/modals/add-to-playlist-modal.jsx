import { useAuth } from "../../context";
import { PlaylistList } from "../list/playlist-list";

const AddToPlaylistModal = ({ isModalOpen, switchModal, videoData }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { playlists } = userDataState;

  const outsideModalClick = () => {
    switchModal((prevState) => !prevState);
  };

  const insideModalClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    switchModal((prevState) => !prevState);
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
        />
      ))}
    </div>
  );
};

export { AddToPlaylistModal };
