import { useState } from "react";
import { useAuth } from "../../context";
import { createPlaylist } from "../../utils/server-requests";

const CreateNewPlaylistModal = ({ isModalOpen, switchModal }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token } = userDataState;
  const [playlistData, setPlaylistData] = useState({
    title: "",
    description: "",
  });

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
    if (playlistData.title && playlistData.description) {
      createPlaylist(playlistData, token, userDataDispatch);
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
                onChange={(e) =>
                  setPlaylistData({ ...playlistData, title: e.target.value })
                }
                type="text"
                className="form-input input-focused"
                placeholder="normal"
                required=""
              />
            </div>
            <div className="form-div">
              <p className="form-label">Playlist description</p>
              <input
                onChange={(e) =>
                  setPlaylistData({
                    ...playlistData,
                    description: e.target.value,
                  })
                }
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
