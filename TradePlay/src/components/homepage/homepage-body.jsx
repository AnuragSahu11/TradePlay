import { useVideos } from "../../context/videos-context";
import { VideoCard } from "../card/video-card";

const HomepageBody = () => {
  const { videoState, videoDispatch } = useVideos();
  const mostViewVideos = videoState.videos
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);
  return (
    <>
      <div className="homepage-categories width-100 flex-r-w space-evenly">
        <div className="title is-4 m-up-5 m-dw-3 m-l-6 is-5 width-100">
          Categories
        </div>
        <div className="m-y-1 is-6 light categories-card flex-row br-3 p-x-2 align-center">
          <i className="fas fa-chart-line"></i>
          <p className="categories-card-text m-l-2 is-4">Stocks</p>
        </div>
        <div className="m-y-1 is-6 light categories-card flex-row br-3 p-x-2 align-center">
          <i className="fab fa-bitcoin"></i>
          <p className="categories-card-text m-l-2 is-4">Crypto</p>
        </div>
        <div className="m-y-1 is-6 light categories-card flex-row br-3 p-x-2 align-center">
          <i className="fas fa-chart-area"></i>
          <p className="categories-card-text m-l-2 is-4">Charting</p>
        </div>
        <div className="m-y-1 is-6 light categories-card flex-row br-3 p-x-2 align-center">
          <i className="fas fa-brain"></i>
          <p className="categories-card-text m-l-2 is-4">Trading mindset</p>
        </div>
      </div>
      <div className="homepage-videos flex-r-w space-evenly">
        <div className="title width-100 m-up-6 m-dw-3 is-5 m-l-6">
          Most liked
        </div>
        {mostViewVideos.map((item) => (
          <VideoCard videoData={item} />
        ))}
      </div>
    </>
  );
};

export { HomepageBody };
