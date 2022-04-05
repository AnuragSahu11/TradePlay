import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../../context/videos-context";

const Search = ({ version }) => {
  const { videoState } = useVideos();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  let [searchedProducts, setSearchedProducts] = useState();

  const searchInputHandler = (text) => {
    setSearchText(text);
    if (!(text === "")) {
      const filteredProducts = videoState.videos
        .filter(({ title }) =>
          title.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(({ title }) => (
          <p className="search-para is-2 p-x-1 p-y-1">{title}</p>
        ));
      setSearchedProducts(filteredProducts);
    } else {
      setSearchedProducts("");
    }
  };

  const goToSearchResultPage = () => {
    setSearchedProducts("");
    navigate(`videoListing/search/${searchText}`);
  };

  return (
    <>
      {version === "desktop" && (
        <div className="form-div nav-search">
          <i className="fas fa-search is-primary" />
          <input
            onChange={(e) => {
              searchInputHandler(e.target.value);
            }}
            type="text"
            className="form-input br-3"
            placeholder="search"
          />
          <div onClick={goToSearchResultPage} className="search-results">
            {searchedProducts}
          </div>
        </div>
      )}
      {version == "mobile" && (
        <div className="nav-mobile-search p-dw-1 shadow">
          <input
            onChange={(e) => {
              searchInputHandler(e.target.value);
            }}
            placeholder="Search videos..."
            className="width-100 mobile-search-input"
            type="text"
          />
          <div onClick={goToSearchResultPage} className="search-results">
            {searchedProducts}
          </div>
        </div>
      )}
    </>
  );
};

export { Search };
