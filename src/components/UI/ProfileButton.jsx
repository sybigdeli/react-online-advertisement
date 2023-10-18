import React from "react";

function ProfileButton(profileLink) {
  return (
    <a href={profileLink}>
      <button className="w-full h-full bg-white rounded-2xl border border-purple-500 items-center justify-center flex ">
        <div className="ViewProfile w-20 h-4 text-right text-purple-500 text-sm font-sans font-['Euclid Circular B'] leading-none tracking-tight">
          View Profile
        </div>
      </button>
    </a>
  );
}

export default ProfileButton;
