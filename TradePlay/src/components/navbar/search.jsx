import { useState } from "react";

const Search = () => {
  let [searchedProducts, setSearchedProducts] = useState();
  const searchInputHandler = (searchText) => {};
  return (
    <div className="form-div nav-search m-x-3">
      <i className="fas fa-search is-primary" />
      <input
        onChange={(e) => searchInputHandler(e.target.value)}
        type="text"
        className="form-input br-3"
        placeholder="search"
      />
      <div className="search-results">{searchedProducts}</div>
    </div>
  );
};

export { Search };
