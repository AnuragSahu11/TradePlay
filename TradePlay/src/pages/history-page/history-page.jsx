import { changeTitle } from "../../utils";
import { useEffect } from "react";
import { useAuth } from "../../context";
import { clearHistory } from "../../server-request/server-requests";
import { SmallVideoCard } from "../../components/card/small-video-card";

const HistoryPage = () => {
  const {
    userDataState: { token, history },
    userDataDispatch,
  } = useAuth();

  const clearHistoryClick = () => {
    clearHistory(token, userDataDispatch);
  };

  const historyVideos = history
    .map((item, i) => <SmallVideoCard remove={"history"} videoData={item} />)
    .reverse();

  useEffect(() => changeTitle("History"));

  return (
    <div className="flex-c-w history-page">
      <div className="history-heading width-100 is-5 bold m-up-5 m-dw-3 text-center">
        History
      </div>
      <div className="center-x history-videos-container">{historyVideos}</div>

      <div className="center-x btn-vertical m-up-4 center-text">
        <button
          onClick={clearHistoryClick}
          className="btn-medium btn-w-icon btn-custom btn-secondary"
        >
          <i className="bx bxs-trash"></i>
          Clear History
        </button>
      </div>
    </div>
  );
};

export { HistoryPage };
