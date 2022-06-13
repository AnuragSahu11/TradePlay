import { Sidebar } from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "./main.css";
import { useEffect } from "react";
import { getAllPlaylists } from "../../server-request/server-requests";
import { useAuth } from "../../context";

const VideoListingPage = () => {
  const {
    userDataState: { token },
    userDataDispatch,
  } = useAuth();

  useEffect(() => {
    getAllPlaylists(token, userDataDispatch);
  }, []);

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
