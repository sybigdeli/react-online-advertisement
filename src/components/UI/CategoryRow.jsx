import propTypes from "prop-types";
function CategoryRow({ image, text }) {
  return (
    <div className="md:flex justify-center items-start gap-[15px]">
      <img
        src={image}
        className="md:flex w-[18px] h-[18px] justify-center items-center"
      />
      <p className="text-black text-[14px] font-normal leading-5">{text}</p>
    </div>
  );
}
CategoryRow.propTypes = {
  image : propTypes.string,
  variant : propTypes.string,
}
export default CategoryRow;
