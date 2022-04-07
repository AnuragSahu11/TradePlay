import { useVideos } from "../../../context/videos-context";
import { VideoCard } from "../../card/video-card";
import { changeTitle } from "../../../utils";
import { useEffect } from "react";

const LikesPage = () => {
  const { videoState } = useVideos();
  const { videos, like } = videoState;
  const likedVideoList = videos.filter((item) => like.includes(item._id));
  const likedVideos = likedVideoList.map((item) => (
    <VideoCard key={item._id} videoData={item} />
  ));
  useEffect(() => changeTitle("Liked Videos"));
  return (
    <div className="flex-r-w space-evenly likes-page">
      <div className="watchlater-heading is-5 bold text-center m-up-5 m-dw-3 width-100">
        Liked Videos
      </div>
      {likedVideos}
    </div>
  );
};

export { LikesPage };
