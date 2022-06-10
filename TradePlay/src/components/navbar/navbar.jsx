import { Search } from "./search";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { NavbarButtons } from "./components/navbar-buttons";
import { LogoutModal } from "../modals/logout-modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const toggleLogout = () => {
    setShowLogout((prevState) => !prevState);
  };
  const hamburgerClickHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <>
      <LogoutModal showLogout={showLogout} toggleLogout={toggleLogout} />
      <div className="nav">
        <nav className="navbar li-shadow">
          <div className="nav-head">
            <div className="nav-brand">
              <i className="fas is-primary is-5 fa-play"></i>
            </div>
            <div onClick={hamburgerClickHandler} className="nav-hamburger">
              <i className="fas fa-bars" />
            </div>
          </div>
          <div className="nav-menu">
            <div className="nav-start flex-row">
              <div
                onClick={() => navigate("/")}
                className="pointer nav-item link"
              >
                Home
              </div>
              <div
                onClick={() => navigate("/videoListing")}
                className="pointer nav-item link"
              >
                Learn
              </div>
            </div>
            <div className="nav-end">
              <Search version="desktop" />
              <button
                onClick={() => navigate("/videoListing/playlist")}
                className="btn-icon nav-icons m-l-2"
              >
                <i className="bx bxs-playlist is-4"></i>
              </button>
              <button
                onClick={() => navigate("/videoListing/watchLater")}
                className="btn-icon nav-icons m-r-1"
              >
                <i className="bx is-4 bxs-bookmarks"></i>
              </button>
              <NavbarButtons toggleLogout={toggleLogout} />
            </div>
          </div>
        </nav>
        <Search version={"mobile"} />
        <div
          className={`mobile-navbar ${
            showNav && "mobile-navbar-view"
          } text-center flex-c-w`}
        >
          <div className="text-center m-up-3 center-x">
            <i className="fas is-primary is-6 fa-play"></i>
            <p className="is-4">
              Trade<span className="is-primary">Play</span>
            </p>
          </div>
          <Link className="is-3 m-up-2 is-dark" to="/">
            Home
          </Link>
          <Link className="is-3 m-up-2 is-dark" to="/videoListing">
            Explore
          </Link>
          <Link className="is-3 m-up-2 is-dark" to="/videoListing/playlist">
            Playlists
          </Link>
          <Link className="is-3 m-up-2 is-dark" to="/videoListing/watchLater">
            Watch Later
          </Link>
          <Link className="is-3 m-up-2 is-dark" to="/videoListing/history">
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar };
