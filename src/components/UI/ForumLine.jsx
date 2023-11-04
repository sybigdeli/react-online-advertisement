import propTypes from "prop-types";
function ForumLine({ title, imageUsers, contactUserImage }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 p-2 rounded-2xl bg-white shadow py-1">
      <div className="grid grid-cols-1 md:grid-cols-4 col-span-1 md:col-span-3 gap-2">
        <div className="w-12 grid mx-auto my-0">
          <img className="w-full h-full rounded-full" src={contactUserImage} />
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
        {imageUsers.map((i , index) => (
          <div className="w-8" key={index}>
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ForumLine.propTypes = {
  title : propTypes.string,
  imageUsers : propTypes.array,
  contactUserImage : propTypes.string
}

export default ForumLine;
