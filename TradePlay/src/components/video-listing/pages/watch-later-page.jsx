import { useEffect } from "react";
import { useAuth } from "../../../context";
import { useVideos } from "../../../context/videos-context";
import { getWatchLater } from "../../../utils/server-requests";
import { VideoCard } from "../../card/video-card";

const WatchLater = () => {
  const { userDataState, userDataDispatch } = useAuth();
  const { token, watchlater } = userDataState;

  useEffect(() => {
    getWatchLater(token, userDataDispatch);
  });

  const watchlaterVideos = watchlater.map((item) => (
    <VideoCard key={item._id} videoData={item} />
  ));

  return (
    <div className="flex-r-w space-evenly">
      <div className="watchlater-heading is-5 bold text-center m-up-5 m-dw-3 width-100">
        Watch Later
      </div>{" "}
      {watchlaterVideos}
    </div>
  );
};
export { WatchLater };
