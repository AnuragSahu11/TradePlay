import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useVideos } from "../../context/videos-context";
import { likeVideo, removeFromLikes } from "../../utils/server-requests";
import { inList } from "../../utils";

const CardLikes = ({ videoData, size }) => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token, likes } = userDataState;
  const [isLiked, setIsLiked] = useState();

  useEffect(() => setIsLiked(inList(likes, videoData._id)));

  const likeClickHandler = async () => {
    isLiked
      ? removeFromLikes(videoData._id, token, userDataDispatch)
      : likeVideo(videoData, token, userDataDispatch);
  };
  return (
    <div className="like-button flex-r-w space-evenly align-center">
      {isLiked ? (
        <i
          onClick={likeClickHandler}
          className={`bx is-4  bx-dislike ${size}`}
        ></i>
      ) : (
        <i
          onClick={likeClickHandler}
          className={`bx is-4  bx-like ${size}`}
        ></i>
      )}
    </div>
  );
};

export { CardLikes };
