import { useEffect } from "react";
import { VideoCard } from "../../components/card/video-card";
import { useAuth } from "../../context";
import { getWatchLater } from "../../server-request/server-requests";
import { changeTitle } from "../../utils";

const WatchLaterPage = () => {
  const {
    userDataState: { token, watchlater },
    userDataDispatch,
  } = useAuth();

  useEffect(() => {
    getWatchLater(token, userDataDispatch);
  });

  const watchlaterVideos = watchlater.map((item) => (
    <VideoCard key={item._id} videoData={item} />
  ));

  changeTitle("Watchlater Videos");
  return (
    <div className="flex-r-w space-evenly">
      <div className="watchlater-heading is-5 bold text-center m-up-5 m-dw-3 width-100">
        Watch Later
      </div>{" "}
      {watchlaterVideos}
    </div>
  );
};
export { WatchLaterPage };
