import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { removeFromPlaylist } from "../../../server-request/server-requests";

const AddToPlaylistCardButton = ({ size, switchModal }) => {
  const navigate = useNavigate();
  const {
    userDataState: { token },
  } = useAuth();
  const clickHandler = () => {
    if (token) {
      switchModal();
    } else {
      toast.error("Login needed");
      navigate("/login");
    }
  };
  return (
    <i
      onClick={clickHandler}
      className={`is-4 pointer bx bxs-playlist ${size}`}
    ></i>
  );
};

const RemoveFromPlaylist = ({ videoId, playlistId, setPlaylistData }) => {
  const {
    userDataState: { token },
  } = useAuth();

  const removeClick = () => {
    removeFromPlaylist(playlistId, videoId, token, setPlaylistData);
  };

  return (
    <i
      onClick={removeClick}
      className="bx is-4 pointer is-primary bx-trash-alt"
    ></i>
  );
};

export { AddToPlaylistCardButton, RemoveFromPlaylist };
