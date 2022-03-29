import { useVideos } from "../../../context/videos-context";
import { VideoCard } from "../../card/video-card";

const History = () => {
  const { videoState, videoDispatch } = useVideos();
  const { videos, history } = videoState;
  const clearHistoryClickHandler = () => {
    videoDispatch({ type: "CLEAR_HISTORY" });
  };
  const historyVideosList = history.map((id) => {
    return videos.filter((videoData) => id === videoData._id)[0];
  });
  const historyVideos = historyVideosList.map((item, i) => (
    <VideoCard key={i} videoData={item} />
  ));
  return (
    <div className="flex-r-w space-evenly history-page">
      <div className="history-heading width-100 is-5 bold m-up-5 m-dw-3 text-center">
        History
      </div>
      {historyVideos}
      <div className="width-100 m-up-4 center-text">
        <button
          onClick={clearHistoryClickHandler}
          className="btn-medium btn-w-icon btn-secondary"
        >
          <i className="bx bxs-trash"></i>
          Clear History
        </button>
      </div>
    </div>
  );
};

export { History };
