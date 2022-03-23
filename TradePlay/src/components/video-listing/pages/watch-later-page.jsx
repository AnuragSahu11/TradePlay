import { useVideos } from "../../../context/videos-context";
import { VideoCard } from "../../card/video-card";

const WatchLater = () => {
  const { videoState } = useVideos();
  const watchlaterVideos = videoState.watchlater.map((item) => (
    <VideoCard videoData={item} />
  ));
  return <div className="flex-r-w space-evenly">{watchlaterVideos}</div>;
};
export { WatchLater };
