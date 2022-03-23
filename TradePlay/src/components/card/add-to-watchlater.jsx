import { useVideos } from "../../context/videos-context";

const AddToWatchLater = ({ videoData }) => {
  const { videoDispatch } = useVideos();
  const clickHandler = () => {
    videoDispatch({ type: "ADD_TO_WATCHLATER", value: videoData });
  };
  return (
    <button onClick={clickHandler} className="btn-secondary m-dw-1 btn-small">
      <i className="bx bx-bookmark-plus m-r-1"></i>Add to Watch later
    </button>
  );
};

export { AddToWatchLater };
