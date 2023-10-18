import React from "react";

function Tags({ tagName  }) {
  return (
    <div className="w-full h-full p-2.5 bg-purple-100 rounded-[10px] justify-start items-start gap-2.5 inline-flex select-none">
      <div className="text-center text-purple-700 text-sm font-semibold  leading-none tracking-tight select-none">
        {tagName}
      </div>
    </div>
  );
}

export default Tags;
