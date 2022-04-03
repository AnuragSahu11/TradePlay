import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <div className="m-l-3 m-up- sidebar br-3 dk-shadow align-center">
      <div
        onClick={() => navigate("/")}
        className="sidebar-subdiv flex-col text-center m-up-5"
      >
        <i className="bx is-5 bx-home"></i>
        Home
      </div>
      <div
        onClick={() => navigate("/videoListing/")}
        className="sidebar-subdiv flex-col text-center m-up-6"
      >
        <i className="bx is-5 bxs-compass"></i>
        Explore
      </div>
      <div
        onClick={() => navigate("/videoListing/playlist")}
        className="sidebar-subdiv flex-col text-center m-up-6"
      >
        <i className="bx is-5 bxs-playlist"></i>
        Playlist
      </div>
      <div
        onClick={() => navigate("/videoListing/likesPage")}
        className="sidebar-subdiv flex-col text-center m-up-6"
      >
        <i className="bx is-5 bxs-like"></i>
        Liked
      </div>
      <div
        onClick={() => navigate("/videoListing/watchLater")}
        className="sidebar-subdiv flex-col text-center m-up-6"
      >
        <i className="bx is-5 bxs-bookmarks"></i>
        Watch Later
      </div>
      <div
        onClick={() => navigate("/videoListing/history")}
        className="sidebar-subdiv flex-col text-center m-up-6"
      >
        <i className="bx is-5 bxs-time-five"></i>
        History
      </div>
    </div>
  );
};

export { Sidebar };
