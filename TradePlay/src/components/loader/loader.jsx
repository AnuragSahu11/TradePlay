import { useVideos } from "../../context";
import { loaderSizeLarge, loaderSizeMedium } from "../../utils/constants";
import "./loader.css";

const Loader = ({ isLoading = null, size }) => {
  let loaderSize = {};
  let loaderPosition = {};
  const { pageLoading } = useVideos();
  let loading = isLoading === null ? pageLoading : isLoading;
  if (size === "large") {
    loaderSize = loaderSizeLarge;
    loaderPosition = { position: "fixed" };
  }
  if (size === "medium") {
    loaderSize = loaderSizeMedium;
  }
  return (
    <div
      style={{ display: loading ? "block" : "none", ...loaderPosition }}
      className="loadingio-spinner-rolling-x2ephjwj9x"
    >
      <div className="ldio-lr5pi4mkvnd">
        <div style={loaderSize}></div>
      </div>
    </div>
  );
};

export { Loader };
