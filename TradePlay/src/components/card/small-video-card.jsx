import { useNavigate } from "react-router-dom";
import { RemoveFromPlaylist } from "./components/add-to-playlist";
import { RemoveFromHistory } from "./components/remove-from-history";

const SmallVideoCard = ({ videoData, playlistId, remove, setPlaylistData }) => {
  const navigate = useNavigate();
  const { _id, title, creator, id } = videoData;

  const goToVideoPage = () => {
    navigate(`/videoListing/${_id}`);
  };

  return (
    <div className="notification-list  p-r-2">
      <ul className="list child-m-s m-x-0">
        <li className="list-items list-none">
          <div className="notification-list-link">
            <div className="card has-accent  border-none card-horizontal">
              <div className="card-head">
                <div onClick={goToVideoPage} className="card-image">
                  <img
                    src={`https://img.youtube.com/vi/${_id}/0.jpg`}
                    alt="card image"
                    srcSet=""
                    className="card-image-img"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div
                    onClick={goToVideoPage}
                    className="small-video-card-title regular"
                  >
                    {title}
                  </div>
                  <div className="is-2 semibold subtitle">{creator}</div>
                </div>
                <div className="textbox">
                  <p className="text"></p>
                </div>
                {remove === "playlist" ? (
                  <RemoveFromPlaylist
                    setPlaylistData={setPlaylistData}
                    playlistId={playlistId}
                    videoId={_id}
                  />
                ) : (
                  <RemoveFromHistory id={_id} />
                )}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { SmallVideoCard };
