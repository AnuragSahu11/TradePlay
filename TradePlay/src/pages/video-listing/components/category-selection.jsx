import { useVideos } from "../../../context/video-context/videos-context";
import { REDUCER_ACTION } from "../../../utils/constants";

const CategorySelection = () => {
  const { videoDispatch } = useVideos();

  const clickHandler = (category) => {
    if (category === "clear_filter") {
      videoDispatch({ type: REDUCER_ACTION.CLEAR_FILTER });
    } else
      videoDispatch({ type: REDUCER_ACTION.CATEGORY_CHANGE, value: category });
  };

  return (
    <div className="homepage-categories width-100 flex-r-w space-evenly">
      <div
        onClick={(e) => clickHandler("stock")}
        className="m-up-3 is-4 light categories-card flex-row br-2 p-x-1 align-center"
      >
        <i className="fas fa-chart-line"></i>
        <p className="categories-card-text m-l-2 is-2">Stocks</p>
      </div>
      <div
        onClick={(e) => clickHandler("crypto")}
        className="m-up-3 is-4 light categories-card flex-row br-2 p-x-1 align-center"
      >
        <i className="fab fa-bitcoin"></i>
        <p className="categories-card-text m-l-2 is-2">Crypto</p>
      </div>
      <div
        onClick={(e) => clickHandler("charting")}
        className="m-up-3 is-4 light categories-card flex-row br-2 p-x-1 align-center"
      >
        <i className="fas fa-chart-area"></i>
        <p className="categories-card-text m-l-2 is-2">Charting</p>
      </div>
      <div
        onClick={(e) => clickHandler("trading_mindset")}
        className="m-up-3 is-4 light categories-card flex-row br-2 p-x-1 align-center"
      >
        <i className="fas fa-brain"></i>
        <p className="categories-card-text m-l-2 is-2">Trading mindset</p>
      </div>
      <div
        onClick={(e) => clickHandler("clear_filter")}
        className="m-up-3 is-4 light categories-card flex-row br-2 p-x-1 align-center"
      >
        <i className="bx bx-filter"></i>
        <p className="categories-card-text m-l-2 is-2">Clear Filter</p>
      </div>
    </div>
  );
};

export { CategorySelection };
