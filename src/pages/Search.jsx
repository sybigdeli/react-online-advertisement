import Img1 from "@/assets/images/7.png";
import Img2 from "@/assets/images/8.png";
import Img3 from "@/assets/images/9.png";

import HeaderSearch from "@/components/BaseLayout/HeaderSearch";
import ProductBox from "@/components/Product/ProductBox";
import Footer from "@/components/BaseLayout/Footer";
import Pagination from "@/components/UI/Pagination";
import propTypes from "prop-types";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Side from "@/components/Side/Side";

const productBoxData = [
  {
    img: [Img1, Img2, Img3, Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
  {
    img: [Img1, Img2, Img3],
    price: "129$",
    title: "Medium 19 inch Carbon Disc Hybrid Bicycle",
    location: "Austin , TX",
  },
];

const Search = () => {
  const [click, SetClick] = useState(false);
  const handleClick = () => {
    SetClick(true);
  };
  useEffect(() => {
    const handleClick = (event) => {
      const isClickInForm = event.target.closest(".side");
      // console.log(isClickInForm);
      if (!isClickInForm) {
        SetClick(false);
      }
    };
    if (click) {
      setTimeout(() => {
        document.body.addEventListener("click", handleClick);
      }, 0);
    }
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [click]);
  return (
    <>
      <>
        {click && (
          <div className="side bg-slate-200 fixed top-0 right-0 w-1/2 h-full z-10">
            <Side />
          </div>
        )}
      </>
      <div>
        <div>
          <HeaderSearch onClick={handleClick}></HeaderSearch>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 border-l-[1px] hidden lg:flex">
            <Side />
          </div>
          <div className="search-content-left grid  col-span-5 lg:col-span-4 ">
            <div className="result-section bg-slate-100 w-full h-[100px] rounded-lg text-[20px] flex justify-center items-center">
              در دست توسعه
            </div>
            <div className="grid grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-1 xl:grid-cols-4 xl:gap-2">
              {productBoxData.map((product) => (
                <ProductBox
                  key={product}
                  img={product.img.map((i) => i)}
                  price={product.price}
                  title={product.title}
                  location={product.location}
                />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
        <Footer></Footer>
      </div>

      {/* <div className=" h-40 aspect-[2/1] bg-slate-500 grid grid-cols-2 m-10 rounded-xl  overflow-hidden  ">
        <div className="col-span-1 relative self-stretch ">
          <img
            className="object-cover h-full absolute aspect-square  object-center"
            src={Img1}
            alt=""
          />
        </div>
        <div className="col-span-1 ">
          <div>در دست توسعه</div>
          <div>نمونه کارها</div>
        </div>
      </div> */}
    </>
  );
};

export default Search;
