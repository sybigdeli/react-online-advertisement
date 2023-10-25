function ForumLine({title,imageUser1,imageUser2,imageUser3,imageUser4,imageUser5}) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 p-2 rounded-2xl bg-white shadow py-1">
      <div className="grid grid-cols-1 md:grid-cols-4 col-span-1 md:col-span-3 gap-2">
        <div className="w-12 grid mx-auto my-0">
          <img className="w-full h-full rounded-full" src={imageUser1} />
        </div>
        <div className="grid col-span-1 md:col-span-3 gap-2 mx-auto my-0">
          <p className="text-neutral-600 text-sm text-center md:text-right">
            {title}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-auto my-0">
            <span className="text-neutral-600 text-xs">Relocation</span>
            <span className="text-purple-500 text-xs">@randmlee</span>
            <span className="text-zinc-400 text-xs">39 minutes ago</span>
            <span className="text-neutral-400 text-xs">15 replies</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 mx-auto my-0">
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
