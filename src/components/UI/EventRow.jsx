import propTypes from "prop-types";
function EventRow({EventText}) {
  return (
    <div className="w-full p-[10px] bg-white shadow text-right rounded-[10px]">
      <div className="text-neutral-600 text-sm leading-[18px]">
        {EventText}
      </div>
    </div>
  );
}

EventRow.propTypes = {
  EventText : propTypes.string,
}

export default EventRow;
