import { Search } from "./search";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState("navbar li-shadow");
  const hamburgerClickHandler = () => {
    if (showNav === "navbar li-shadow")
      setShowNav("navbar custom-nav li-shadow");
    if (showNav === "navbar custom-nav li-shadow") {
      setShowNav("navbar li-shadow");
    }
  };
  return (
    <nav className={showNav}>
      <div className="nav-head">
        <div className="nav-brand">
          <i className="fas is-primary is-5 fa-play"></i>
        </div>
        <div onClick={hamburgerClickHandler} className="nav-hamburger">
          <i className="fas fa-bars" />
        </div>
      </div>
      {/* <div className="nav-brand">
        <a href="" className="logo-a">
          <i className="fas is-primary fa-play"></i>
        </a>
      </div>
      <div className="nav-hamburger">
        <i className="fas fa-bars" />
      </div> */}
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
          <Search />
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
  );
};

export { Navbar };
