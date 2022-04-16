import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToHistoryUtil } from "../../context/context-utils";
import { useVideos } from "../../context/videos-context";
import { AddToPlaylistModal } from "../modals/add-to-playlist-modal";
import { AddToPlaylistCardButton } from "./add-to-playlist";
import { AddToWatchLater } from "./add-to-watchlater";
import { CardLikes } from "./card-likes";
import { addToHistory } from "../../utils/server-requests";
import { useAuth } from "../../context";

const VideoCard = ({ videoData }) => {
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();
  const { videoDispatch } = useVideos();
  const { userDataState, userDataDispatch } = useAuth();
  const { token, history } = userDataState;
  const { _id, title, creator, category } = videoData;
  const switchShowModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const cardClickHandler = async () => {
    await addToHistory(videoData, token, userDataDispatch);
  };

  return (
    <div className="video-card-container">
      {showModal && (
        <AddToPlaylistModal
          videoId={videoData._id}
          switchModal={switchShowModal}
        />
      )}
      <div className="homepage-videos-cards video-card m-y-2 m-x-2">
        <div className="card shadow">
          <div onClick={cardClickHandler} className="card-head">
            <div className="card-image">
              <img
                src={`https://img.youtube.com/vi/${_id}/0.jpg`}
                alt="card image"
                className="card-image-img"
              />
            </div>
          </div>
          <div className="card-body width-100">
            <div className="textbox">
              <div onClick={cardClickHandler} className="title is-2 semibold">
                {title.slice(0, 60)}...
              </div>
              <div className="subtitle m-up-1 regular is-2 flex-r-w space-between">
                <span>{creator}</span> <span>{category}</span>{" "}
              </div>
            </div>
            <div className="textbox flex-r-w space-evenly m-dw-1 align-center">
              <CardLikes videoData={videoData} />
              <AddToPlaylistCardButton switchModal={switchShowModal} />
            </div>

            <div className="btn-vertical">
              <AddToWatchLater videoData={videoData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
