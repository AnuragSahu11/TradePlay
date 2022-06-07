import { useEffect, useState } from "react";
import { useAuth } from "../../../context";
import {
  likeVideo,
  removeFromLikes,
} from "../../../server-request/server-requests";
import { inList } from "../../../utils";

const CardLikes = ({ videoData, size, setLoading }) => {
  const {
    userDataState: { token, likes },
    userDataDispatch,
  } = useAuth();
  const [isLiked, setIsLiked] = useState();

  const { _id } = videoData;

  useEffect(() => setIsLiked(inList(likes, _id)));

  const likeClickHandler = async () => {
    isLiked
      ? removeFromLikes(_id, token, userDataDispatch, setLoading)
      : likeVideo(videoData, token, userDataDispatch, setLoading);
  };
  return (
    <div className="like-button pointer flex-r-w space-evenly align-center">
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
