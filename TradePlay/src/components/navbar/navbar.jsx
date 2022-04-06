import { Search } from "./search";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(" ");
  const hamburgerClickHandler = () => {
    if (showNav === " ") setShowNav("mobile-navbar-view");
    if (showNav === "mobile-navbar-view") {
      setShowNav(" ");
    }
  };
  return (
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
          <div className="nav-start">
            <a href="" className="nav-item link">
              Home
            </a>
            <a href="" className="nav-item link">
              Learn
            </a>
          </div>
          <div className="nav-end">
            <Search version="desktop" />
            <button className="btn-icon nav-icons m-x-1">
              <i className="bx bxs-playlist is-4"></i>
            </button>
            <button className="btn-icon nav-icons m-x-1">
              <i className="fas fas fa-moon is-primary" />
            </button>
            <button className="btn-primary nav-btn btn-small">Log in</button>
          </div>
        </div>
      </nav>
      <Search version={"mobile"} />
      <div className={`mobile-navbar ${showNav} text-center flex-c-w`}>
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
  );
};

export { Navbar };
