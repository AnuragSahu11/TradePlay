import { useVideos } from "../../../context/videos-context";
import { VideoCard } from "../../card/video-card";

const WatchLater = () => {
  const { videoState } = useVideos();
  const { watchlater, videos } = videoState;
  const watchlaterVideoList = videos.filter((item) =>
    watchlater.includes(item._id)
  );
  const watchlaterVideos = watchlaterVideoList.map((item) => (
    <VideoCard videoData={item} />
  ));
  return (
    <div className="flex-r-w space-evenly">
      <div className="watchlater-heading is-5 text-center m-up-4 m-dw-3 width-100">
        Watch Later
      </div>{" "}
      {watchlaterVideos}
    </div>
  );
};
export { WatchLater };
