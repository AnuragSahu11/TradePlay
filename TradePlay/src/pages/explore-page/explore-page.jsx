import { useVideos } from "../../context/video-context/videos-context";
import { CategorySelection } from "../video-listing/components/category-selection";
import { changeTitle } from "../../utils";
import { useEffect } from "react";
import { VideoCard } from "../../components/card/video-card";

const ExplorePage = () => {
  const {
    videoState: { videos, category },
  } = useVideos();
  useEffect(() => changeTitle("Explore videos"));
  const videoList = (list, category) => {
    if (category) {
      return list.filter((item) => item.category === category);
    }
    return [...videos];
  };
  const explorePageVideos = videoList(videos, category)
    .sort((a, b) => b.views - a.views)
    .map((item) => <VideoCard key={item.id} videoData={item} />);
  return (
    <div className="explore-page">
      <CategorySelection />
      <div className="video-listing-videos video-card-container flex-r-w m-up-3 space-evenly">
        {explorePageVideos}
      </div>
    </div>
  );
};

export { ExplorePage };
