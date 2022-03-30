import { useEffect, useState } from "react";
import { useVideos } from "../../context/videos-context";

const CardLikes = ({ videoData }) => {
  const { videoState, videoDispatch } = useVideos();
  const [isLiked, setIsLiked] = useState();

  useEffect(() => setIsLiked(videoState.like.includes(videoData._id)));

  const likeClickHandler = () => {
    if (isLiked) {
      videoDispatch({ type: "UNLIKE_VIDEO", value: videoData._id });
    } else videoDispatch({ type: "LIKE_VIDEO", value: videoData._id });
  };
  return (
    
      <div className="like-button flex-r-w space-evenly align-center">
        {isLiked ? (
          <i onClick={likeClickHandler} className="bx is-4  bx-dislike"></i>
        ) : (
          <i onClick={likeClickHandler} className="bx is-4  bx-like"></i>
        )}
      </div>
      
  );
};

export { CardLikes };
