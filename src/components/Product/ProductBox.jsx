import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/images/7.png";
import img2 from "../../assets/images/8.png";
import img3 from "../../assets/images/9.png";

import Like from "../../assets/icons/Like.svg";
import "swiper/css";
import "swiper/css/pagination";

import "./Product.css";
const ProductBox = ({ children }) => {
  const ProductValue = [img1, img2, img3];
  return (
    <div
      className="product-box rounded-[19px] overflow-hidden m-3 shadow-lg
    "
    >
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {ProductValue.map((i) => {
          return (
            <SwiperSlide key={i.length}>
              <img src={i} alt="" className="w-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="product-box__footer p-y[10px] px-[10px] py-[5px]">
        <div className="product-box__footer__top flex justify-between font-bold text-textColor-900">
          <span>{children}</span>
          <img src={Like} alt="" className="fill-red-100" />
        </div>
        <p className="product-box__footer__mid text-textColor-200">
          Lorem ipsum dolor sit amet
        </p>
        <span className="product-box__footer__down text-textColor-100">
          Lorem ipsum
        </span>
      </div>
    </div>
  );
};

export default ProductBox;
