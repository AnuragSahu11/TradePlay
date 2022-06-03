import { changeTitle } from "../../utils";
import { useEffect } from "react";
import { useAuth } from "../../context";
import { VideoCard } from "../../components/card/video-card";

const LikedVideoPage = () => {
  const {
    userDataState: { likes },
  } = useAuth();

  const likedVideos = likes.map((item) => (
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

export { LikedVideoPage };
