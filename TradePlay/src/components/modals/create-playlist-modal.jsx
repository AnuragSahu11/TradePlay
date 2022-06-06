import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context";
import { createPlaylist } from "../../server-request/server-requests";

const CreateNewPlaylistModal = ({ isModalOpen, switchModal }) => {
  const {
    userDataState: { token },
    userDataDispatch,
  } = useAuth();

  const [playlistData, setPlaylistData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = playlistData;

  const outsideModalClick = () => {
    switchModal((prevState) => !prevState);
  };

  const insideModalClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    switchModal((prevState) => !prevState);
  };

  const submitClick = () => {
    if (title && description) {
      createPlaylist(playlistData, token, userDataDispatch);
    } else {
      toast.error("Enter correct details");
    }
    switchModal((prevState) => !prevState);
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
          <div className="title text-center">Create new Playlist</div>
          <div className="form width-100">
            <div className="form-div">
              <p className="form-label">Playlist name</p>
              <i className="bx bxs-playlist"></i>
              <input
                onChange={(e) =>
                  setPlaylistData({ ...playlistData, title: e.target.value })
                }
                type="text"
                className="form-input input-focused"
                placeholder="Playlist name"
                required=""
              />
            </div>
            <div className="form-div">
              <p className="form-label">Playlist description</p>
              <i className="bx bx-info-circle"></i>
              <input
                onChange={(e) =>
                  setPlaylistData({
                    ...playlistData,
                    description: e.target.value,
                  })
                }
                type="text"
                className="form-input input-focused"
                placeholder="Playlist description"
                required=""
              />
            </div>
          </div>
        </div>
        <div className="btn-horizontal">
          <button
            onClick={submitClick}
            className="btn-secondary btn-small btn-w-icon"
          >
            <i className="bx bx-list-plus"></i>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateNewPlaylistModal };
