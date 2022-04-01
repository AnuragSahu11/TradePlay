import { useParams } from "react-router-dom";
import { useVideos } from "../../../context/videos-context";

const SingleVideoPage = () => {
  const { id } = useParams();
  const { videoState } = useVideos();
  const videoData = videoState.videos.find(({ _id }) => _id === id);
  const { videoLink } = videoData;
  return (
    <div className="single-video-page">
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
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="video-page-content"></div>
    </div>
  );
};
export { SingleVideoPage };
