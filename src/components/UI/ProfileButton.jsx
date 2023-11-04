import React from "react";

function ProfileButton({ profileLink, children }) {
  return (
    <a href={profileLink}>
      <button className="w-full h-full bg-white rounded-2xl border border-purple-500 items-center justify-center">
        <div className=" w-full p-4 items-center h-4 text-right text-purple-500 text-sm font-sans leading-none tracking-tight flex">
          {children}
        </div>
      </button>
    </a>
  );
}

export default ProfileButton;

