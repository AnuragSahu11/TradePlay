import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <div className="m-l-3 sidebar br-3 dk-shadow align-center pointer">
      <div
        onClick={() => navigate("/")}
        className="sidebar-subdiv flex-col text-center m-up-5"
      >
        <i className="bx is-5 bxs-home"></i>
        Home
      </div>
      <NavLink
        to="/videoListing/"
        className="sidebar-subdiv flex-col text-center m-up-6"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        <i className="bx is-5 bxs-compass"></i>
        Explore
      </NavLink>
      <NavLink
        to="/videoListing/playlist"
        className="sidebar-subdiv flex-col text-center m-up-6"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        <i className="bx is-5 bxs-playlist"></i>
        Playlists
      </NavLink>
      <NavLink
        to="/videoListing/likesPage"
        className="sidebar-subdiv flex-col text-center m-up-6"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        <i className="bx is-5 bxs-like"></i>
        Liked Videos
      </NavLink>
      <NavLink
        to="/videoListing/watchLater"
        className="sidebar-subdiv flex-col text-center m-up-6"
        style={({ isActive }) => (isActive ? { color: "red" } : null)}
      >
        <i className="bx is-5 bxs-bookmarks"></i>
        Watch Later
      </NavLink>
      <NavLink
        to="/videoListing/history"
        className="sidebar-subdiv flex-col text-center m-up-6"
        style={({ isActive }) =>
          isActive ? { color: "var(--primary)" } : null
        }
      >
        <i className="bx is-5 bxs-time-five"></i>
        History
      </NavLink>
    </div>
  );
};

export { Sidebar };
