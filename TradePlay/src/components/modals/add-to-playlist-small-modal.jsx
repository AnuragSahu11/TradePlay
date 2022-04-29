import { useAuth } from "../../context";
import { addToPlaylist } from "../../utils/server-requests";

const AddToPlaylistSmallModal = ({ videoData, switchModal }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { playlists, token } = userDataState;

  const addToPlaylistClick = (playlistId) => {
    addToPlaylist(videoData, playlistId, token);
    switchModal();
  };

  const playlist = playlists.map((item) => (
    <div
      onClick={() => addToPlaylistClick(item._id)}
      className="add-to-playlist-small is-3"
    >
      {item.title}
    </div>
  ));

  return (
    <div className="single-video-playlist-list p-y-1 p-x-3">{playlist}</div>
  );
};

export { AddToPlaylistSmallModal };
