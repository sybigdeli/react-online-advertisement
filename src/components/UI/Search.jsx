import SearchIcon from "../../assets/icons/search.svg";
import DownIcon from "../../assets/icons/down.svg";

function Search({ children, varient }) {
  return (
    <div className="searchParent w-96 h-12">
      <div className="search w-full h-full rounded-2xl bg-slate-400 flex justify-between items-center">
        <input
          type="text"
          value={varient}
          className="bg-transparent outline-0"
        />

        <div className="search-category min-w-min flex justify-between">
          <span>{children}</span>
          <img src={DownIcon} alt="" />
        </div>

        <img src={SearchIcon} />
      </div>
    </div>
  );
}

export default Search;
