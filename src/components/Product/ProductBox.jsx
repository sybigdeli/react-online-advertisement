import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import propTypes from "prop-types";

import Like from "../../assets/icons/Like.svg";
import Liked from "../../assets/icons/Liked.svg";
import "swiper/css";
import "swiper/css/pagination";

import "./Product.css";
import { useState } from "react";
const ProductBox = ({ children, image_list, price, title, location }) => {
  const [handleLiked, SetHandleLiked] = useState(false);

  return (
    <div
      className="product-box  rounded-2xl  m-3 shadow-lg
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
        {image_list.map((image, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={image}
                alt=""
                className="relative w-full aspect-video self-stretch rounded-2xl  object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="product-box__footer  h-36   px-5 py-3 flex flex-col justify-between ">
        <div className="product-box__footer__top flex justify-between font-bold text-textColor-900">
          <span className="text-sky-600">{price}</span>
          <img
            src={handleLiked ? Liked : Like}
            className="opacity-50"
            onClick={() => {
              SetHandleLiked(!handleLiked);
            }}
          />
        </div>
        <p className="product-box__footer__mid  text-textColor-200  truncate ">
          {title} ...
        </p>
        <span className="product-box__footer__down text-textColor-100 flex">
          {location}
        </span>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: propTypes.node,
  image_list: propTypes.arrayOf(propTypes.string),
  price: propTypes.number,
  title: propTypes.string,
  location: propTypes.string,
};
export default ProductBox;
