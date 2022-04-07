import { HomepageBody } from "./homepage-body";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
import { useEffect } from "react";
import { changeTitle } from "../../utils";

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(() => changeTitle("TradePlay"));
  return (
    <section className="homepage-section">
      <div className="homepage-hero width-100 flex-r-w align-center center-text">
        <i className="bx hero-icon text-center is-primary bx-play"></i>
        <div className="hero-text">
          <div className="textbox">
            <div className="hero-title center-text flex-row align-center">
              TRADE<span className="is-primary">PLAY</span>{" "}
              <i className="fas m-l-2 is-6 is-primary fa-play"></i>
            </div>
            <div className="subtitle is-3 is-dark regular center-text">
              Curated videos to learn trading the fast way
            </div>
          </div>
          <button
            onClick={() => navigate("/videoListing")}
            className="btn-primary m-up-3 btn-medium br-1"
          >
            Start Learning
          </button>
        </div>
      </div>
      <HomepageBody />
    </section>
  );
};

export { Homepage };
