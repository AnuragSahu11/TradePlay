import { useVideos } from "../../context/videos-context";
import { Explore } from "./pages/explore-page";
import { Sidebar } from "./sidebar";
import { Outlet, Routes } from "react-router-dom";

const VideoListing = () => {
  const { videoState } = useVideos();

  return (
    <div className="flex-row width-100">
      <Sidebar />
      <div className="video-listing width-100 flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export { VideoListing };
