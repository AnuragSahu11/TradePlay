import { useNavigate } from "react-router-dom";
import { RemoveFromPlaylist } from "./add-to-playlist";
import { RemoveFromHistory } from "./remove-from-history";
import { addToHistory } from "../../utils/add-to-history";
import { useVideos } from "../../context/videos-context";

const SmallVideoCard = ({ videoData, playlistName, remove }) => {
  const navigate = useNavigate();
  const { videoDispatch } = useVideos();
  const { _id, title } = videoData;
  const goToVideoPage = () => {
    addToHistory(_id, videoDispatch);
    navigate(`/videoListing/${_id}`);
  };

  return (
    <div className="notification-list  p-r-2">
      <ul className="list child-m-s m-x-0">
        <li className="list-items list-none">
          <div className="notification-list-link">
            <div className="card has-accent border-none card-horizontal">
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
                  <div className="subtitle">Subtitle</div>
                </div>
                <div className="textbox">
                  <p className="text">Lorem ipsum</p>
                </div>
                {remove === "playlist" ? (
                  <RemoveFromPlaylist playlistName={playlistName} id={_id} />
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
