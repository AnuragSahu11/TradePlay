import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { addToPlaylist } from "../../server-request/server-requests";

const PlaylistList = ({ playlistData, videoData, action }) => {
  const { title, _id } = playlistData;
  const {
    userDataState: { token },
  } = useAuth();

  const navigate = useNavigate();

  const clickHandler = () => {
    switch (action) {
      case "view":
        navigate(`/videoListing/playlist/${_id}`);
        break;
      case "add":
        addToPlaylist(videoData, _id, token);
        break;
    }
  };

  return (
    <div
      onClick={clickHandler}
      className="addToPlaylist playlist-list m-up-4 center-x  text-center p-x-2 br-3 create-playlist flex-row align-center is-4"
    >
      <i className="bx bx-play-circle is-primary is-5 m-r-1"></i>
      <p className="m-y-1 regular text-center">{title}</p>
    </div>
  );
};

export { PlaylistList };
