import { VideoCard } from "../../components/card/video-card";
import { useAuth } from "../../context";
import { changeTitle } from "../../utils";

const WatchLaterPage = () => {
  const {
    userDataState: { watchlater },
  } = useAuth();

  changeTitle("Watchlater Videos");

  return (
    <div className="flex-r-w space-evenly">
      <div className="watchlater-heading is-5 bold text-center m-up-5 m-dw-3 width-100">
        Watch Later
      </div>{" "}
      {watchlater.map((item) => (
        <VideoCard key={item._id} videoData={item} />
      ))}
    </div>
  );
};
export { WatchLaterPage };
