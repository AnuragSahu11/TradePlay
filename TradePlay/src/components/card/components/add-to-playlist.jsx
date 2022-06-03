import { useAuth } from "../../../context";
import { removeFromPlaylist } from "../../../server-request/server-requests";

const AddToPlaylistCardButton = ({ size, switchModal }) => {
  return (
    <i onClick={switchModal} className={`is-4 bx bxs-playlist ${size}`}></i>
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
    <i onClick={removeClick} className="bx is-4 is-primary bx-trash-alt"></i>
  );
};

export { AddToPlaylistCardButton, RemoveFromPlaylist };