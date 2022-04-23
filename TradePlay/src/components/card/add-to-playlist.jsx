import { useAuth } from "../../context";
import { removeFromPlaylist } from "../../utils/server-requests";

const AddToPlaylistCardButton = ({ size, switchModal }) => {
  return (
    <i onClick={switchModal} className={`is-4 bx bxs-playlist ${size}`}></i>
  );
};

const RemoveFromPlaylist = ({ videoId, playlistId }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token } = userDataState;

  const removeClickHandler = () => {
    removeFromPlaylist(playlistId, videoId, token);
  };
  return (
    <i
      onClick={removeClickHandler}
      className="bx is-4 is-primary bx-trash-alt"
    ></i>
  );
};

export { AddToPlaylistCardButton, RemoveFromPlaylist };
