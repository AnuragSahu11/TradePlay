import { useEffect, useState } from "react";
import { useAuth } from "../../../context";
import { inList } from "../../../utils/in-list";
import {
  addToWatchLater,
  removeFromWatchlater,
} from "../../../server-request/server-requests";

const AddToWatchLater = ({ videoData, setLoading }) => {
  const {
    userDataState: { token, watchlater },
    userDataDispatch,
  } = useAuth();
  const [inWatchlater, setWatchLater] = useState(
    inList(watchlater, videoData._id)
  );

  const { _id } = videoData;

  useEffect(() => {
    setWatchLater(inList(watchlater, _id));
  });

  let buttonText = inWatchlater
    ? "Remove from Watch Later"
    : "Add to Watch Later";

  const watchlaterClick = () => {
    inList(watchlater, _id)
      ? removeFromWatchlater(_id, token, userDataDispatch, setLoading)
      : addToWatchLater(videoData, token, userDataDispatch, setLoading);
  };

  return (
    <button
      onClick={watchlaterClick}
      className="btn-secondary btn-custom m-dw-1 btn-small"
    >
      <i className="bx bx-bookmark-plus m-r-1"></i>
      {buttonText}
    </button>
  );
};

const AddToWatchlaterSmall = ({ videoData, setLoading }) => {
  const {
    userDataState: { token, watchlater },
    userDataDispatch,
  } = useAuth();

  const { _id } = videoData;

  const [inWatchlater, setInWatchlater] = useState(inList(watchlater, _id));

  useEffect(() => {
    setInWatchlater(inList(watchlater, _id));
  });

  const addToWatchlaterClick = () => {
    inWatchlater
      ? removeFromWatchlater(_id, token, userDataDispatch, setLoading)
      : addToWatchLater(videoData, token, userDataDispatch, setLoading);
  };

  return (
    <i
      onClick={addToWatchlaterClick}
      className={`${inWatchlater && "is-primary"} is-5 bx bxs-bookmarks`}
    ></i>
  );
};

export { AddToWatchLater, AddToWatchlaterSmall };
