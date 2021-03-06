import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddToPlaylistModal } from "../modals/add-to-playlist-modal";
import { AddToPlaylistCardButton } from "./components/add-to-playlist";
import { AddToWatchLater } from "./components/add-to-watchlater";
import { CardLikes } from "./components/card-likes";
import { addToHistory } from "../../server-request/server-requests";
import { useAuth } from "../../context";
import { Loader } from "../loader/loader";

const VideoCard = ({ videoData }) => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    userDataState: { token },
    userDataDispatch,
  } = useAuth();

  const { _id, title, creator, category } = videoData;

  const switchShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const cardClickHandler = async () => {
    addToHistory(videoData, token, userDataDispatch);
    navigate(`/videoListing/${_id}`);
  };

  return (
    <div className="video-card-container">
      <Loader isLoading={isLoading} size="medium" />
      {showModal && (
        <AddToPlaylistModal
          videoData={videoData}
          toggleModal={switchShowModal}
          setLoading={setLoading}
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
              <CardLikes setLoading={setLoading} videoData={videoData} />
              <AddToPlaylistCardButton switchModal={switchShowModal} />
            </div>

            <div className="btn-vertical">
              <AddToWatchLater setLoading={setLoading} videoData={videoData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
