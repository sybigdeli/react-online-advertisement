import Header from "@/components/Header";
import ProductBox from "@/components/Product/ProductBox";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="search-content-right col-span-1 border-l-[1px] flex justify-center">
          <div className="bg-slate-100 w-5/6 h-full  rounded-md text-[20px] flex justify-center items-center">
            در دست توسعه
          </div>
        </div>
        <div className="search-content-left grid  col-span-4 ">
          <div className="result-section bg-slate-100 w-full h-[100px] rounded-lg text-[20px] flex justify-center items-center">
            در دست توسعه
          </div>

          <div className="grid grid-cols-4 gap-4">
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
            <ProductBox>در دست توسعه</ProductBox>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Search;
