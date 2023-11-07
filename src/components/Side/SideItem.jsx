import propTypes from "prop-types";
function SideItem({ title, icon, selected, onClick, subCats }) {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex justify-start font-normal text-textColor-200 gap-4 p-2 w-full"
      >
        <img src={icon} className="w-5" alt="" />
        <span className={`${subCats ? "font-bold" : "font-normal"} `}>
          {title}
        </span>
      </div>
      {subCats}
    </div>
  );
}
SideItem.propTypes = {
  title : propTypes.string,
  icon : propTypes.string,
  onClick : propTypes.func,
  subCats : propTypes.arrayOf(propTypes.node),
}
export default SideItem;
