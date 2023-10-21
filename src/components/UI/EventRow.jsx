function EventRow({EventText}) {
  return (
    <div className="w-full text-center p-[10px] bg-white shadow flex justify-end items-end rounded-[10px]">
      <div className="text-neutral-600 text-sm leading-[18px]">
        {EventText}
      </div>
    </div>
  );
}

export default EventRow;
