import { useVideos } from "../../../context/videos-context";
import { CategorySelection } from "../category-selection";
import { VideoCard } from "../../card/video-card";

const Explore = () => {
  const { videoState } = useVideos();
  const videoList = (list, category) => {
    if (category) {
      return list.filter((item) => item.category === videoState.category);
    }
    return [...videoState.videos];
  };
  const explorePageVideos = videoList(
    videoState.videos,
    videoState.category
  ).map((item) => <VideoCard key={item.id} videoData={item} />);
  return (
    <div className="explore-page">
      <CategorySelection />
      <div className="video-listing-videos video-card-container flex-r-w m-up-3 space-evenly">
        {explorePageVideos}
      </div>
    </div>
  );
};

export { Explore };
