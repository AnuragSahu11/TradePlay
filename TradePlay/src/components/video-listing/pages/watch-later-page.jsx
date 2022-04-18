import { useEffect } from "react";
import { useAuth } from "../../../context";
import { useVideos } from "../../../context/videos-context";
import { getWatchLater } from "../../../utils/server-requests";
import { VideoCard } from "../../card/video-card";

const WatchLater = () => {
  const { userDataState } = useAuth();
  const { token } = userDataState;

  useEffect(() => {
    getWatchLater(token);
  });

  // const { videoState } = useVideos();
  // const { watchlater, videos } = videoState;
  // const watchlaterVideoList = videos.filter((item) =>
  //   watchlater.includes(item._id)
  // );
  // const watchlaterVideos = watchlaterVideoList.map((item) => (
  //   <VideoCard key={item._id} videoData={item} />
  // ));

  return (
    <div className="flex-r-w space-evenly">
      <div className="watchlater-heading is-5 bold text-center m-up-5 m-dw-3 width-100">
        Watch Later
      </div>{" "}
      {/* {watchlaterVideos} */}
    </div>
  );
};
export { WatchLater };
