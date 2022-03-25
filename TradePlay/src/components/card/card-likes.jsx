import { useVideos } from "../../context/videos-context";

const CardLikes = ({ videoData }) => {
  const { videoState, videoDispatch } = useVideos();
  const likeClickHandler = () => {
    if (videoState.like.includes(videoData._id)) {
      videoDispatch({ type: "UNLIKE_VIDEO", value: videoData._id });
    } else videoDispatch({ type: "LIKE_VIDEO", value: videoData._id });
  };
  return (
    <div className="textbox flex-r-w space-evenly align-center">
      <div className="like-button flex-r-w space-evenly align-center">
        <i onClick={likeClickHandler} className="bx is-4  bx-like"></i>
      </div>
      <i className="is-4 bx bxs-playlist"></i>
    </div>
  );
};

export { CardLikes };
