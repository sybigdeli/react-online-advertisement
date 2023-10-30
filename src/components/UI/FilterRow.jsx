import React from "react";
import downicon from "../../assets/icons/down.png";
import propTypes from "prop-types";

function FilterRow({ filterName }) {
  return (
    <div className="w-56 h-9 relative">
      <div className="Price left-0 top-[3px] absolute text-stone-500 text-sm font-semibold leading-none tracking-wide">
        {filterName}
      </div>
      <div className="Down w-5 h-5 left-[195px] top-0 absolute opacity-50" />
      <div className="Line3 w-56 h-px left-0 top-[31px] absolute border border-neutral-200"></div>
      <div className="Down w-5 h-5 relative opacity-50">
        <img src={downicon} alt="" />
      </div>
    </div>
  );
}
FilterRow.propTypes = {
  city : propTypes.string,
  country : propTypes.string,
}
export default FilterRow;
