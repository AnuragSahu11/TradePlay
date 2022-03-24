import { useEffect, useState } from "react";
import { useVideos } from "../../context/videos-context";
import { inList } from "../../utils/in-list";

const AddToWatchLater = ({ videoData }) => {
  const { videoState, videoDispatch } = useVideos();
  const [inWatchlater, setWatchLater] = useState(
    inList(videoState.watchlater, videoData._id)
  );

  useEffect(() => {
    setWatchLater(inList(videoState.watchlater, videoData._id));
  });

  let buttonText = inWatchlater
    ? "Remove from Watch Later"
    : "Add to Watch Later";

  const clickHandler = () => {
    if (inWatchlater) {
      videoDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        value: videoData._id,
      });
    } else {
      videoDispatch({ type: "ADD_TO_WATCHLATER", value: videoData._id });
    }
  };
  return (
    <button onClick={clickHandler} className="btn-secondary m-dw-1 btn-small">
      <i className="bx bx-bookmark-plus m-r-1"></i>
      {buttonText}
    </button>
  );
};

export { AddToWatchLater };
