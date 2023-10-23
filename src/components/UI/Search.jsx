import SearchIcon from "../../assets/icons/search.svg";
import DownIcon from "../../assets/icons/down.svg";

function Search({ children, varient }) {
  return (
    <div className="searchParent w-full h-12 ">
      <div className="search  w-full h-full px-[10px] rounded-[20px] bg-white border-solid border-2 border-neutral-200 flex justify-between items-center">
        <div className="search-category min-w-min flex justify-between ">
          <span className="">{children}</span>
          <img src={DownIcon} alt="" />
          <div className="w-[1px] self-stretch bg-slate-200 rounded-[30px]"></div>
        </div>
        <input
          type="text"
          value={varient}
          className="bg-transparent outline-0"
        />

        <img src={SearchIcon} />
      </div>
    </div>
  );
}

export default Search;
