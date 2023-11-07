import ProductBox from "@/components/Product/ProductBox";
import Pagination from "@/components/UI/Pagination";
// import propTypes from "prop-types";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Side from "@/components/Side/Side";
import { apiSearchPost } from "@/api/search";
import { useSearchParams } from "react-router-dom";
import Button from "@/components/UI/Button";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();

  const [click, SetClick] = useState(false);

  const handleClick = () => {
    SetClick(true);
  };
  const q = searchParams.get("q");

  const getSearchData = async () => {
    try {
      setIsLoading(true);
      const data = await apiSearchPost({ q });

      setSearchData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [q]);

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
      {click && (
        <div className="side bg-slate-200 fixed top-0 right-0 w-1/2 h-full z-10">
          <Side />
        </div>
      )}

      <div>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-1 border-l-[1px] hidden lg:flex">
            <Side />
          </div>
          <div className="search-content-left grid  col-span-5 lg:col-span-4 ">
            <div className="result-section bg-slate-100 w-full h-[100px] rounded-lg text-[20px] flex justify-center items-center">
              در دست توسعه
            </div>

            <div className="grid grid-cols-2 sm:gap-16 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-1 xl:grid-cols-4 xl:gap-2">
              {isLoading
                ? "در حال دریافت اطلاعات ..."
                : searchData.length === 0
                ? "چیزی یافت نشد."
                : searchData.map((product) => (
                    <ProductBox
                      key={product.id}
                      price={product.price}
                      title={product.title}
                      image_list={product.images}
                      location={product.location}
                    />
                  ))}
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
