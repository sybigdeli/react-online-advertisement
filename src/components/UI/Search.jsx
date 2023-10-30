import SearchIcon from "../../assets/icons/search.svg";
import DownIcon from "../../assets/icons/down.svg";
import propTypes from "prop-types";


function Search({ children, varient }) {
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
        <div className="flex w-full items-center">
          <input
            type="text"
            value={varient}
            className="bg-transparent outline-0 w-full p-4 text-sm"
          />
          <img src={SearchIcon} />
        </div>
      </div>
    </div>
  );
}
Search.propTypes = {
  children : propTypes.node,
  varient : propTypes.string,
}
export default Search;
