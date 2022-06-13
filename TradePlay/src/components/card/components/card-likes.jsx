import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import {
  likeVideo,
  removeFromLikes,
} from "../../../server-request/server-requests";
import { inList } from "../../../utils";

const CardLikes = ({ videoData, size, setLoading }) => {
  const navigate = useNavigate();
  const {
    userDataState: { token, likes },
    userDataDispatch,
  } = useAuth();
  const [isLiked, setIsLiked] = useState();

  const { _id } = videoData;

  useEffect(() => setIsLiked(inList(likes, _id)));

  const likeClickHandler = async () => {
    if (token) {
      isLiked
        ? removeFromLikes(_id, token, userDataDispatch, setLoading)
        : likeVideo(videoData, token, userDataDispatch, setLoading);
    } else {
      toast.error("Login needed");
      navigate("/login");
    }
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
