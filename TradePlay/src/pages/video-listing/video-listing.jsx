import { Sidebar } from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "./main.css";

const VideoListingPage = () => {
  return (
    <div className="flex-row width-100 video-listing">
      <Sidebar />
      <div className=" width-100 flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export { VideoListingPage };
