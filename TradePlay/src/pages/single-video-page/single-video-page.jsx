import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVideoFromAPI } from "../../server-request/server-requests";
import { AddToPlaylistCardButton } from "../../components/card/components/add-to-playlist";
import { CardLikes } from "../../components/card/components/card-likes";
import { AddToPlaylistSmallModal } from "../../components/modals/add-to-playlist-small-modal";
import { AddToWatchlaterSmall } from "../../components/card/components/add-to-watchlater";
import { Loader } from "../../components/loader/loader";

const SingleVideoPage = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [videoData, setVideoData] = useState({});
  const [isLoading, setLoading] = useState(false);

  const switchModal = () => {
    setShowModal((prevState) => !prevState);
  };

  useEffect(() => {
    getVideoFromAPI(id, setVideoData);
  });

  const { videoLink, description, title } = videoData;

  return (
    <div className="single-video-page grid-70-30">
      <div className="">
        <div className="single-videopage-video p-up-4 ">
          <div className="videowrapper">
            <iframe
              src={`${videoLink}`}
              title="YouTube video player"
              frameBorder="0"
              controls="0"
              autohide="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="video-page-content width-100">
          <div className="title m-l-4 m-y-2 semibold">{title}</div>
          <div className="has-accent br-1 p-l-4 p-y-1 video-page-buttons width-100 align-center is-5 m-l- m-up-2 flex-r-w ">
            <Loader isLoading={isLoading} />
            <CardLikes
              size={"is-5"}
              videoData={videoData}
              setLoading={setLoading}
            />
            <div className="btn-vertical m-x-6">
              <AddToWatchlaterSmall
                videoData={videoData}
                setLoading={setLoading}
              />
            </div>
            <AddToPlaylistCardButton
              size={"is-5"}
              switchModal={switchModal}
              setLoading={setLoading}
            />
            {showModal && (
              <AddToPlaylistSmallModal
                videoData={videoData}
                switchModal={switchModal}
                setLoading={setLoading}
              />
            )}
          </div>
          <div className="textbox">
            <p className="p-x-4 is-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleVideoPage };
