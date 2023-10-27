import HeaderSearch from "@/components/HeaderSearch";
import ProductBox from "@/components/Product/ProductBox";
import Footer from "@/components/Footer";
import Pagination from "@/components/UI/Pagination";
// import { Link } from "react-router-dom";
import Rectangle from "@/components/UI/Rectangle";
import { useEffect, useState } from "react";

const Search = () => {
  const [click, SetClick] = useState(false);
  const handleClick = () => {
    SetClick(true);
  };
  useEffect(() => {
    const handleClick = (event) => {
      const isClickInForm = event.target.closest(".rectangle");
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
          <div className="rectangle fixed top-0 right-0 w-1/3 h-full z-10">
            <Rectangle></Rectangle>
          </div>
        )}
      </>
      <div>
        <div>
          <HeaderSearch onClick={handleClick}></HeaderSearch>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 border-l-[1px] hidden lg:flex">
            <Rectangle></Rectangle>
          </div>
          <div className="search-content-left grid  col-span-5 lg:col-span-4 ">
            <div className="result-section bg-slate-100 w-full h-[100px] rounded-lg text-[20px] flex justify-center items-center">
              در دست توسعه
            </div>
            <div className="grid grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-1 xl:grid-cols-4 xl:gap-2">
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
              <ProductBox>در دست توسعه</ProductBox>
            </div>
            <Pagination />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Search;
