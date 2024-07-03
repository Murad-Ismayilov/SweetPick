import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
const HomeSkirket = () => {
  return (
    <>
      <div className="">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="card text-bg-dark pb-0 ">
                <img
                  src="https://www.max-themes.net/demos/sweetpick/upload/revolution/slider4.jpg"
                  className="sabitHundurluk"
                  alt=""
                />
                <div className="card-img-overlay">
                  <h5 className="card-title"> Discount 50% Off</h5>
                  <p>
                    <img
                      src="/assets/image/s-border.webp"
                      alt=""
                      id="s-border"
                    />{" "}
                  </p>
                  <p className="card-text">HOT TRENDS SALES</p>
                  <a href="#" class="btn">
                    {" "}
                    SHOP NOw{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="col-12 col-md-12 col-lg-12">
              <div className="card text-bg-dark pb-0 ">
                <img
                  src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717607827/slider2_vcjj5k.webp"
                  className="sabitHundurluk"
                  alt=""
                />
                <div className="card-img-overlay">
                  <h5 className="card-title"> Hot Trends of This Year </h5>
                  <p>
                    <img
                      src="/assets/image/s-border.webp"
                      alt=""
                      id="s-border"
                    />{" "}
                  </p>
                  <p className="card-text"> WINTER COLLECTION</p>
                  <a href="#" class="btn">
                    {" "}
                    SHOP NOw{" "}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSkirket;
