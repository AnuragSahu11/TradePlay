import { useParams } from "react-router-dom";
import { useVideos } from "../../../context/videos-context";
import { CardLikes } from "../../card/card-likes";
import { AddToWatchLater } from "../../card/add-to-watchlater";
import { useState } from "react";
import { AddToPlaylistCardButton } from "../../card/add-to-playlist";
import { AddToPlaylistSmallModal } from "../../modals/add-to-playlist-small-modal";

const SingleVideoPage = () => {
  const [showModal, setShowModal] = useState(false);
  const switchModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const { id } = useParams();
  const { videoState } = useVideos();
  const videoData = videoState.videos.find(({ _id }) => _id === id);
  const { videoLink, description } = videoData;
  return (
    <div className="single-video-page grid-70-30">
      <div className="">
        <div className="single-videopage-video p-up-4 p-l-4">
          <div className="videowrapper">
            <iframe
              // src={`${videoLink}?modestbranding=1&showinfo=0&autoplay=1`}
              src={`${videoLink}`}
              title="YouTube video player"
              frameborder="0"
              controls="0"
              autohide="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="video-page-content width-100">
          <div className="video-page-buttons width-100 align-center is-5 space-evenly m-up-2 flex-r-w width-100">
            <CardLikes videoData={videoData} />
            <div className="btn-vertical">
              <AddToWatchLater videoData={videoData} />
            </div>
            <AddToPlaylistCardButton switchModal={switchModal} />
            {showModal && (
              <AddToPlaylistSmallModal videoId={id} switchModal={switchModal} />
            )}
          </div>
          <div className="textbox">
            <p className="m-l-4 p-x-4 is-2">{description}</p>
          </div>
        </div>
      </div>
      <div className="single-video-page-note"></div>
    </div>
  );
};

export { SingleVideoPage };
