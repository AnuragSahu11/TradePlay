import { useVideos } from "../context/videos-context";
import { useState, useEffect } from "react";
import { inList } from "./in-list";

const AddToWatchLaterSmall = ({ videoData }) => {
  const { videoState, videoDispatch } = useVideos();
  const [inWatchlater, setWatchLater] = useState(
    inList(videoState.watchlater, videoData._id)
  );

  useEffect(() => {
    setWatchLater(inList(videoState.watchlater, videoData._id));
  });
  const addToWatchlaterClickHandler = () => {
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
    <i
      onClick={addToWatchlaterClickHandler}
      className={`${inWatchlater && "is-primary"} is-5 bx bxs-bookmarks`}
    ></i>
  );
};

export { AddToWatchLaterSmall };
