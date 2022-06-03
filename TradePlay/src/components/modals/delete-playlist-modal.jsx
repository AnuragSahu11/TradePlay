import { useAuth } from "../../context";
import { deletePlaylist } from "../../server-request/server-requests";

const DeletePlaylistModal = ({ switchModal }) => {
  const {
    userDataState: { token, playlists },
    userDataDispatch,
  } = useAuth();

  const deletePlaylistClick = (id) => {
    deletePlaylist(id, token, userDataDispatch);
  };

  const outsideModalClick = () => {
    switchModal();
  };

  const insideModalClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    switchModal();
  };

  return (
    <div onClick={outsideModalClick} className="modal-wrapper">
      <div
        onClick={(e) => insideModalClick(e)}
        className="modal center-x m-up-6 shadow"
      >
        <button onClick={closeModal} className="card-cross btn-close is-medium">
          <i className="fas fa-times" />
        </button>
        <i className="modal-icon is-primary bx bxs-playlist" />
        <div className="textbox">
          <div className="title text-center">Delete Playlist</div>
        </div>
        <div className="playlist-list flex-c-w width-100">
          {playlists.map(({ _id, title }) => (
            <div
              onClick={() => deletePlaylistClick(_id)}
              className="addToPlaylist playlist-list m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4"
            >
              <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
              <p className="m-y-1 regular text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { DeletePlaylistModal };
