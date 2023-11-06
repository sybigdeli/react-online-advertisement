import Footer from "@/components/BaseLayout/Footer";
import HeaderSearch from "@/components/BaseLayout/Header";
import React, { useState } from "react";
import rightIcon from "@/assets/icons/right.svg";
import leftIcon from "@/assets/icons/left.svg";
import byce1 from "@/assets/images/detail1.svg";
import byce2 from "@/assets/images/detail2.svg";
import byce3 from "@/assets/images/detail3.svg";
import byce4 from "@/assets/images/detail4.svg";
import byce5 from "@/assets/images/detail5.svg";
import map from "@/assets/images/map.png";
import likeicon from "@/assets/icons/like.svg";
import reporticon from "@/assets/icons/report.svg";
import shareicon from "@/assets/icons/share.svg";
import usericon from "@/assets/images/user7.svg";
import ProfileButton from "@/components/UI/ProfileButton";
function Details() {
  const productPictures = [byce2, byce3, byce4, byce5, byce1];
  const [previewPic, setPreviewPick] = useState(productPictures[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const picChange = (pic, index) => {
    setPreviewPick(pic);
    setSelectedIndex(index);
  };

  return (
    <div>
      <div className="shadow-xl">
        <HeaderSearch />
      </div>
      <div className="py-[24px] ">
        <div className="flex items-center pr-[64px] select-none flex-wrap">
          <a href={"/"}> Home </a>
          <img className="h-[16px] w-[16px]" src={leftIcon} alt="" />
          <a href={"/"}> For Sale </a>
          <img className="h-[16px] w-[16px]" src={leftIcon} alt="" />
          <a href={"/"}> Bicycles </a>
          <img className="h-[16px] w-[16px]" src={leftIcon} alt="" />
          <a className="font-semibold" href={"/Details"}>
            {" "}
            Medium 54cm Trek Alpha 1.2 Endurance / Road Bike{" "}
          </a>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="  px-[24px] flex w-full gap-[40px] col-span-2 ">
          <div className=" w-[50px]  flex flex-col gap-3">
            {productPictures.map((pic, index) => (
              <div className="">
                <img
                  onClick={() => picChange(pic, index)}
                  className={` object-cover rounded-md ${
                    index === selectedIndex
                      ? " object-cover border-2 border-blue-500"
                      : ""
                  }`}
                  key={index + "albumpics"}
                  src={pic}
                />
              </div>
            ))}
          </div>
          <div className="   overflow-hidden rounded-xl aspect-square">
            <img
              className=" object-cover w-full h-full "
              src={previewPic}
              alt=""
            />
          </div>
        </div>

        <section className=" col-span-3">
          <div className=" flex flex-wrap justify-between">
            <div> Medium 54cm Trek Alpha 1.2 Endurance / Road Bike</div>
            <div className="flex ml-36">
              <img src={likeicon} alt="likeicon" />
              <img src={shareicon} alt="shareicon" />
              <img src={reporticon} alt="reporticon" />
            </div>
          </div>
          <div className="grid grid-cols-10 justify-start">
            <h3 className="col-span-1">$1,975</h3>
            <p className="font-estedadLighter col-span-4">
              Posted 15 hours ago in Austin, TX
            </p>
          </div>
          <div className="grid grid-cols-7 ">
            <section className="col-span-3 flex-col h-full w-full ">
              <ul>
                <h1 className="font-extrabold pb-3">Overview</h1>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Condition</span>
                  <span className="font-semibold">Like New</span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Bicycle Type</span>
                  <span className="font-semibold">Road</span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Frame Material</span>
                  <span className="font-semibold">Carbon Fiber</span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Frame Size</span>
                  <span className="font-semibold">Medium 54cm</span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Model name</span>
                  <span className="font-semibold">
                    Trek Alpha 1.2 Endurance
                  </span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Wheel Size</span>
                  <span className="font-semibold">700C</span>
                </li>
                <li className="p-1 flex justify-between">
                  <span className="text-textColor-100">Make/Manufacturer</span>
                  <span className="font-semibold">Specialized</span>
                </li>
              </ul>
            </section>
            <div className=" col-span-3 pr-16">
              <img src={map} alt="map" />
            </div>
          </div>
          <div className="ml-36 ">
            <hr className="my-6" />
            <div className="flex justify-between ">
              <div className="flex">
              <img src={usericon} alt="usericon" className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[3.125rem] h-[3.125rem] bg-[url"/>
              <div className="flex-col p-2" >
              <div className=" text-[#b160fb]  text-sm font-semibold leading-5 ">@jackdaniels </div>
              <div className=" text-[#555] font-['Euclid text-sm leading-6">150 Listed  35 Sold</div>
            </div>
              </div>
              <div className="flex max-h-[40px] space-x-4 ">
                <ProfileButton>View Profile</ProfileButton>
                <br />
                <ProfileButton>Send Message</ProfileButton>
              </div>
            </div>
          </div>
          <div className=" col-span-3"></div>
          <div></div>
        </section>
      </div>
      <div dir="" className=" justify-center items-center px-[130px] pt-[40px]">
        <div>
          <h3>Details</h3>
          <p className="pt-3 font-estedadLighter ">
            I am selling my Medium 54cm Trek Alpha 1.2 Endurance / Road Bike.
            This bike is in like new condition with extremely low mileage and it
            just received a full tune up! It shifts smoothly and the brakes are
            nice and tight. This bike makes working out an absolute delight and
            it can handle any paved terrain Austin has to offer! <br />
            <br /> It features a 54cm medium sized, super light aluminum frame,
            a carbon fiber fork, an 18-speed Shimano Sora/Tiagra groupset and
            700x23c tires/wheels.
            <br />
            <br /> Without a doubt, this is the PERFECT bike for Austin!
          </p>
        </div>
      </div>

      <footer className=" w-full bottom-0 h-[191px] pt-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Details;
