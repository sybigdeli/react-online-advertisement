function ForumLine({imageUser1,imageUser2,imageUser3,imageUser4,imageUser5}) {
  return (
    <div className="w-2/6 flex justify-between items-center gap-[10px] bg-white shadow p-[5px]">
      <div className="flex flex-row justify-center items-center gap-[10px]">
        <div className="w-12">
          <img className="w-full h-full rounded-full" src={imageUser1} />
        </div>
        <div className="flex flex-col justify-end items-end gap-[2px]">
          <p className="text-neutral-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className="flex justify-end items-end gap-[12px]">
            <span className="text-neutral-600 text-xs">Relocation</span>
            <span className="text-purple-500 text-xs">@randmlee</span>
            <span className="text-zinc-400 text-xs">39 minutes ago</span>
            <span className="text-neutral-400 text-xs">15 replies</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className="w-8">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src={imageUser4}
          />
        </div>
        <div className="w-8">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src={imageUser3}
          />
        </div>
        <div className="w-8">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src={imageUser2}
          />
        </div>
        <div className="w-8">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src={imageUser5}
          />
        </div>
      </div>
    </div>
  );
}

export default ForumLine;
