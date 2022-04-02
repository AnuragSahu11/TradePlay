import { usePlaylist } from "../../context/playlist-context";

const AddToPlaylistCardButton = ({ size, switchModal }) => {
  return (
    <i onClick={switchModal} className={`is-4 bx bxs-playlist ${size}`}></i>
  );
};

const RemoveFromPlaylist = ({ id, playlistName }) => {
  const { playlistDispatch } = usePlaylist();
  const clickHandler = () => {
    playlistDispatch({
      type: "REMOVE_FROM_PLAYLIST",
      value: { id, playlistName },
    });
  };
  return (
    <i onClick={clickHandler} className="bx is-4 is-primary bx-trash-alt"></i>
  );
};

export { AddToPlaylistCardButton, RemoveFromPlaylist };
