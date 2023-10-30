import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Like from "../../assets/icons/Like.svg";
import Liked from "../../assets/icons/Liked.svg";
import "swiper/css";
import "swiper/css/pagination";

import "./Product.css";
import { useState } from "react";
const ProductBox = ({ children, img1, img2, img3, price, title, location }) => {
  const ProductValue = [img1, img2, img3];

  const [handleLiked, SetHandleLiked] = useState(false);

  return (
    <div
      className="product-box max-w-[280px] rounded-2xl overflow-hidden m-3 shadow-lg
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {ProductValue.map((i) => {
          return (
            <SwiperSlide key={i.length}>
              <img src={i} alt="" className="w-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="product-box__footer px-3 py-2 gap-28">
        <div className="product-box__footer__top flex justify-between font-bold text-textColor-900">
          <span>{price}</span>
          <img
            src={handleLiked ? Liked : Like}
            className="opacity-50"
            onMouseEnter={() => {
              SetHandleLiked(!handleLiked);
            }}
          />
        </div>
        <p className="product-box__footer__mid text-textColor-200">{title}</p>
        <span className="product-box__footer__down text-textColor-100">
          {location}
        </span>
      </div>
    </div>
  );
};

export default ProductBox;
