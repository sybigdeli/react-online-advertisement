import Footer from "@/components/BaseLayout/Footer";
import HeaderSearch from "@/components/BaseLayout/HeaderSearch";
import React, { useState } from "react";
import rightIcon from "@/assets/icons/right.svg";
import leftIcon from "@/assets/icons/left.svg";
import byce1 from "@/assets/images/detail1.svg";
import byce2 from "@/assets/images/detail2.svg";
import byce3 from "@/assets/images/detail3.svg";
import byce4 from "@/assets/images/detail4.svg";
import byce5 from "@/assets/images/detail5.svg";
function Details() {
  const productPictures = [byce1, byce2, byce3, byce4, byce5];
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

      <div className="flex pt-[30px]">
        <div>
          <div className="flex items-center pr-[64px] select-none">
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
          <div className=" pt-[24px] flex w-full">
            <div className=" right-[60px] w-[50px] relative flex-col">
              {productPictures.map((pic, index) => (
                <img
                  onClick={() => picChange(pic, index)}
                  className={`pt-[10px] rounded-md ${
                    index === selectedIndex ? "border-2 border-blue-500" : ""
                  }`}
                  key={index + "albumpics"}
                  src={pic}
                />
              ))}
            </div>
            <div className="flex pr-[80px] ">
              <img
                className="w-[530px] h-[450px] rounded-s "
                src={previewPic}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="">
        dsafsafadsf
        </div>
      </div>
      <div dir="" className=" justify-center items-center px-[130px] pt-[40px]">
                  <div>
                    <h3>Details</h3>
                    <p className="pt-3 font-estedadLighter ">I am selling my Medium 54cm Trek Alpha 1.2 Endurance / Road Bike. This bike is in like new condition with extremely low mileage and it just received a full tune up! It shifts smoothly and the brakes are nice and tight. This bike makes working out an absolute delight and it can handle any paved terrain Austin has to offer! <br/><br/> It features a 54cm medium sized, super light aluminum frame, a carbon fiber fork, an 18-speed Shimano Sora/Tiagra groupset and 700x23c tires/wheels.<br/><br/> Without a doubt, this is the PERFECT bike for Austin!</p>
                  </div>
      </div>

      <footer className=" w-full bottom-0 h-[191px] pt-4">
        <Footer />
      </footer>
    </div>
  );
}

export default Details;
