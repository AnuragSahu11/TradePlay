import { useVideos } from "../../context/videos-context";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";
import "./video-listing.css";

const VideoListing = () => {
  return (
    <div className="flex-row width-100 m-up-6">
      <Sidebar />
      <div className="video-listing width-100 flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export { VideoListing };
