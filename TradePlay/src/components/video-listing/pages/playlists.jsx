import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../../context/playlist-context";

const SinglePlaylistComponent = ({ name, videoId, action }) => {
  const { playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log(action);
    if (action === "view") {
      navigate(`/videoListing/playlist/${name}`);
    }
    if (action === "add") {
      playlistDispatch({
        type: "ADD_TO_PLAYLIST",
        value: { name: name, id: videoId },
      });
    }
  };
  return (
    <div
      onClick={clickHandler}
      className="addToPlaylist playlist-list m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4"
    >
      <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
      <p className="m-y-1 regular text-center">{name}</p>
    </div>
  );
};

// const SinglePlaylist = ({ name }) => {
//   const { playlistDispatch } = usePlaylist();
//   const navigate = useNavigate();
//   const clickHandler = () => {};
//   return (
//     <div
//       onClick={clickHandler}
//       className="addToPlaylist playlist-list m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4"
//     >
//       <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
//       <p className="m-y-1 regular text-center">{name}</p>
//     </div>
//   );
// };

export { SinglePlaylistComponent };
