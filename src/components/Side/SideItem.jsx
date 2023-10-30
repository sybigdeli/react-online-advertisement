function SideItem({ title, icon, selected, onClick, subCat }) {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex justify-start font-normal text-textColor-200 gap-4 p-2 w-full"
      >
        <img src={icon} className="w-5" alt="" />
        <span className={`${subCat ? "font-bold" : "font-normal"} `}>
          {title}
        </span>
      </div>
      {subCat}
    </div>
  );
}

export default SideItem;
