const Navbar = () => {
  return (
    <nav className="navbar shadow">
      <div className="nav-brand">
        <a href="" className="logo-a">
          <i className="fas is-primary fa-play"></i>
        </a>
      </div>
      <div className="nav-hamburger">
        <i className="fas m-r-2 fas fa-moon is-black" />
        <i className="fas fa-bars" />
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
          <div className="form-div nav-search m-r-3">
            <i className="fas fa-search is-primary" />
            <input
              type="text"
              className="form-input br-3"
              placeholder="search"
            />
          </div>
          <button className="btn-icon nav-icons m-x-1">
            <i className="bx bxs-playlist is-4"></i>
          </button>
          <button className="btn-icon nav-icons m-x-1">
            <i className="fas fa-clock is-3"></i>
          </button>
          <button className="btn-icon nav-icons m-x-1">
            <i className="fas fa-heart is-3" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
