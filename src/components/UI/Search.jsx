import SearchIcon from "../../assets/icons/search.svg";
import DownIcon from "../../assets/icons/down.svg";
import propTypes from "prop-types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Search({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q"));

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams((s) => ({ ...s, q: query }));
  };

  return (
    <div className="searchParent w-full h-12">
      <div className="search w-full h-full px-3 rounded-3xl overflow-hidden bg-white border-solid border-2 border-neutral-200 flex justify-between items-center">
        <div className="search-category min-w-min flex items-center justify-between ">
          <span className="flex flex-wrap text-center text-xs md:text-md">
            {children}
          </span>
          <img src={DownIcon} />
          <div className="w-[2px] self-stretch bg-slate-200 rounded-5xl"></div>
        </div>
        <form className="flex w-full items-center" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            className="bg-transparent outline-0 w-full p-4 text-sm"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <img src={SearchIcon} />
          </button>
        </form>
      </div>
    </div>
  );
}
Search.propTypes = {
  children: propTypes.node,
};
export default Search;
