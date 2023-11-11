import ProductBox from "@/components/Product/ProductBox";
import { useEffect, useState } from "react";
import Side from "@/components/Side/Side";
import { apiSearchPost } from "@/api/search";
import { useSearchParams } from "react-router-dom";
import LoadingBox from "@/components/UI/LoadingBox";
import FilterListIcon from "@mui/icons-material/FilterList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "@/components/UI/style.css";
const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  console.log(searchData);
  const [searchParams] = useSearchParams();

  const [click, SetClick] = useState(false);

  const handleClick = () => {
    SetClick(true);
    document.body.style = "overflow: hidden ";
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
        document.body.style = "overflow: auto";
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
        <div className="side m-0 bg-slate-100 fixed top-0 right-0 w-2/4  h-screen overflow-y-scroll overflow-x-hidden z-10">
          <Side />
        </div>
      )}

      <div>
        <div className="grid grid-cols-12 gap-8">
          <div
            className={`col-span-4 border-l-[1px] hidden md:flex lg:col-span-3 ${
              searchData.length === 0 ? "h-screen" : ""
            }`}
          >
            <Side />
          </div>
          <div className="search-content-left grid  col-span-12 md:col-span-8 lg:col-span-9 ">
            <div className="result-section bg-slate-100 w-full h-24 md:hidden  px-3  rounded-lg text-[20px] flex justify-between items-center">
              <div
                className="w-8 h-8 rounded-md  bg-slate-200 flex  justify-center items-center"
                onClick={handleClick}
              >
                <FilterListIcon />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-1 xl:grid-cols-3 xl:gap-2">
              {isLoading ? (
                <>
                  <LoadingBox />
                  <LoadingBox />
                  <LoadingBox />
                </>
              ) : searchData.length === 0 ? (
                "چیزی یافت نشد."
              ) : (
                searchData.map((product) => (
                  <ProductBox
                    key={product.id}
                    price={product.price}
                    title={product.title}
                    image_list={product.images}
                    location={product.location}
                  />
                ))
              )}
            </div>
            <div className="flex justify-center py-10">
              <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
