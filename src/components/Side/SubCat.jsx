import React from "react";
import propTypes from "prop-types";

function SubCat({ title }) {
  return <div className="text-textColor-200 px-10">{title}</div>;
}

SubCat.propTypes = {
  title : propTypes.string,
}
export default SubCat;
