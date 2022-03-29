import { useState } from "react";
import { usePlaylist } from "../../context/playlist-context";

const CreateNewPlaylistModal = ({ isModalOpen, switchModal }) => {
  const { playlistDispatch } = usePlaylist();
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const outsideModalClickHandler = () => {
    switchModal((prevState) => !prevState);
  };
  const insideModalClickHandler = (e) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    switchModal((prevState) => !prevState);
  };
  const submitClickHandler = () => {
    if (playlistName && playlistDesc) {
      playlistDispatch({
        type: "CREATE_PLAYLIST",
        value: { name: playlistName, desc: playlistDesc },
      });
    }
    switchModal((prevState) => !prevState);
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
          <div className="title text-center">Create new Playlist</div>
          <div className="form width-100">
            <div className="form-div">
              <p className="form-label">Playlist name</p>
              <input
                onChange={(e) => setPlaylistName(e.target.value)}
                type="text"
                className="form-input input-focused"
                placeholder="normal"
                required=""
              />
            </div>
            <div className="form-div">
              <p className="form-label">Playlist description</p>
              <input
                onChange={(e) => setPlaylistDesc(e.target.value)}
                type="text"
                className="form-input input-focused"
                placeholder="normal"
                required=""
              />
            </div>
          </div>
        </div>
        <div className="btn-horizontal">
          <button onClick={submitClickHandler} className="btn-grey btn-medium">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateNewPlaylistModal };
