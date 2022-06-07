import { useAuth } from "../../context";
import { addToPlaylist } from "../../server-request/server-requests";

const AddToPlaylistSmallModal = ({ videoData, switchModal, setLoading }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { playlists, token } = userDataState;

  const addToPlaylistClick = (playlistId) => {
    addToPlaylist(videoData, playlistId, token, setLoading);
    switchModal();
  };

  const playlist = playlists.map(({ _id, title }) => (
    <div
      onClick={() => addToPlaylistClick(_id)}
      className="add-to-playlist-small pointer p-x-2 is-3"
    >
      {title}
    </div>
  ));

  return <div className="single-video-playlist-list p-y-1 ">{playlist}</div>;
};

export { AddToPlaylistSmallModal };
