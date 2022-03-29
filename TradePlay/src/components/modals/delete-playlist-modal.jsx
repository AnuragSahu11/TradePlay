import { usePlaylist } from "../../context/playlist-context";

const DeletePlaylistModal = ({ switchModal }) => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const clickHandler = (name) => {
    playlistDispatch({ type: "REMOVE_PLAYLIST", value: name });
  };
  const outsideModalClickHandler = () => {
    switchModal();
  };
  const insideModalClickHandler = (e) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    switchModal();
  };
  return (
    <div onClick={outsideModalClickHandler} className="modal-wrapper">
      <div
        onClick={(e) => insideModalClickHandler(e)}
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
          {playlistState.playlists.map((item) => (
            <div
              onClick={() => clickHandler(item.name)}
              className="addToPlaylist playlist-list m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4"
            >
              <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
              <p className="m-y-1 regular text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { DeletePlaylistModal };
