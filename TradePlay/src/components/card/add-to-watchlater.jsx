import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { useVideos } from "../../context/videos-context";
import { inList } from "../../utils/in-list";
import { addToWatchLater, getWatchLater } from "../../utils/server-requests";

const AddToWatchLater = ({ videoData }) => {
  const { userDataState } = useAuth();
  const { token } = userDataState;

  // const [inWatchlater, setWatchLater] = useState(
  //   inList(videoState.watchlater, videoData._id)
  // );

  // useEffect(() => {
  //   setWatchLater(inList(videoState.watchlater, videoData._id));
  // });

  // let buttonText = inWatchlater
  //   ? "Remove from Watch Later"
  //   : "Add to Watch Later";

  const watchlaterClickHandler = () => {
    addToWatchLater(videoData, token);
  };

  return (
    <button
      onClick={watchlaterClickHandler}
      className="btn-secondary btn-custom m-dw-1 btn-small"
    >
      <i className="bx bx-bookmark-plus m-r-1"></i>
      {/* {buttonText} */} remove
    </button>
  );
};

export { AddToWatchLater };
