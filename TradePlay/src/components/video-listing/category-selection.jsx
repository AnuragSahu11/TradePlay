import { useVideos } from "../../context/videos-context";

const CategorySelection = () => {
  const { videoDispatch } = useVideos();
  const clickHandler = (name) => {
    videoDispatch({ type: "CATEGORY_CHANGE", value: name });
  };
  return (
    <div className="homepage-categories m-up-2 width-100 flex-r-w space-evenly">
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
    </div>
  );
};

export { CategorySelection };
