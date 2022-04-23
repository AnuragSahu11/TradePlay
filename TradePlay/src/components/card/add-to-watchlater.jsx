import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { inList } from "../../utils/in-list";
import {
  addToWatchLater,
  getWatchLater,
  removeFromWatchlater,
} from "../../utils/server-requests";

const AddToWatchLater = ({ videoData }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token, watchlater } = userDataState;

  const [inWatchlater, setWatchLater] = useState(
    inList(watchlater, videoData._id)
  );

  useEffect(() => {
    setWatchLater(inList(watchlater, videoData._id));
  });

  let buttonText = inWatchlater
    ? "Remove from Watch Later"
    : "Add to Watch Later";

  const watchlaterClickHandler = () => {
    inList(watchlater, videoData._id)
      ? removeFromWatchlater(videoData._id, token, userDataDispatch)
      : addToWatchLater(videoData, token, userDataDispatch);
  };

  return (
    <button
      onClick={watchlaterClickHandler}
      className="btn-secondary btn-custom m-dw-1 btn-small"
    >
      <i className="bx bx-bookmark-plus m-r-1"></i>
      {buttonText}
    </button>
  );
};

export { AddToWatchLater };
