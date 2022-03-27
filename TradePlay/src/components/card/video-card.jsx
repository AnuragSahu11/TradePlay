import { useState } from "react";
import { addToHistoryUtil } from "../../context/context-utils";
import { useVideos } from "../../context/videos-context";
import { AddToPlaylistModal } from "../../utils/add-to-playlist-modal";
import { AddToPlaylistCardButton } from "./add-to-playlist";
import { AddToWatchLater } from "./add-to-watchlater";
import { CardLikes } from "./card-likes";

const VideoCard = ({ videoData }) => {
  const [showModal, setShowModal] = useState(false);
  const { videoDispatch } = useVideos();
  const switchShowModal = () => {
    setShowModal((prevState) => !prevState);
    console.log("switched");
  };
  const addToHistory = () => {
    videoDispatch({ type: "ADD_TO_HISTORY", value: videoData._id });
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
          <div onClick={addToHistory} className="card-head">
            <div className="card-image">
              <img
                src="https://picsum.photos/310/250"
                alt="card image"
                className="card-image-img"
              />
            </div>
          </div>
          <div className="card-body width-100">
            <div className="textbox">
              <div className="title">Cart Title</div>
              <div className="subtitle flex-r-w space-between">
                <span>creator</span> <span>category</span>{" "}
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
