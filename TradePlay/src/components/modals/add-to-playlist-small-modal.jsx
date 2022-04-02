import { usePlaylist } from "../../context/playlist-context";

const AddToPlaylistSmallModal = ({ videoId, switchModal }) => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const clickHandler = ({ name }) => {
    playlistDispatch({
      type: "ADD_TO_PLAYLIST",
      value: { name: name, id: videoId },
    });
    switchModal();
  };
  const playlists = playlistState.playlists.map((item) => (
    <div
      onClick={() => clickHandler(item)}
      className="add-to-playlist-small is-3"
    >
      {item.name}
    </div>
  ));
  return (
    <div className="single-video-playlist-list p-y-1 p-x-3">{playlists}</div>
  );
};

export { AddToPlaylistSmallModal };
