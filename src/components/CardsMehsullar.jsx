import React from "react";
import "./CardsMehsullar.css";

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay } from 'swiper/modules';


const CardsMehsullar = () => {
  return (
    <>
      <div class="feature-prods" style={{background:"#f7f7f7"}}>
        <div class="container" >
          <div class="row" >
            <div class="col-md-3" >
              <div class="fprod-item">
                <h1 class="prot-title">Special Offer</h1>

                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717685713/fproditem1_fbxqjz.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Black Leather Jacket</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717685713/fproditem2_1_qio4t0.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Black Man Suit</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686815/fproditem3_euncvo.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Grey California Dress</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="fprod-item">
                <h1 class="prot-title">Best Sellers</h1>

                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem4_faaipa.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Brown Leather Bag</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem5_bctqqk.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Business Suit</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem6_qurelx.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>White Elegant Dress</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="fprod-item">
                <h1 class="prot-title">Top Rated</h1>

                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem7_btfmm5.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Elegant Dress</h3>
                        <p class="price-h">$ 299.99</p>
                        <img
                          src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717608337/stars_lxfo71.webp"
                          alt=""
                        />
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688485/fproditem8_ba0oj3.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Yellow Sweater</h3>
                        <p class="price-h">$ 299.99</p>
                        <img
                          src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717608337/stars_lxfo71.webp"
                          alt=""
                        />
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688491/fproditem9_qhdcv3.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Brown Leather Jacket</h3>
                        <p class="price-h">$ 299.99</p>
                        <img
                          src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717608337/stars_lxfo71.webp"
                          alt=""
                        />
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="fprod-item">
                <h1 class="prot-title">Sales</h1>

                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688492/fproditem10_pbncpw.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Brown Lady Shoes</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688492/fproditem11_m6ibpd.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Denim Grey Suit</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688493/fproditem12_bhve2y.webp"
                        alt=""
                      />
                      <div class="fproditem-text">
                        <h3>Man Black Suit</h3>
                        <p class="price-h">$ 299.99</p>
                      </div>
                      <span class="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="partners">
		<div class="container">
			<div class="row">

				<Swiper 
				slidesPerView={6}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    },
                    960:{
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                    1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                    },
                }}
				modules={[Autoplay]}
				className='mySwiper'
				>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners1_zfdt47.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners2_v4b4lh.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners3_yxwmpo.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994620/partners4_k25edj.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994611/partners5_hrpmjb.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994717/partners6_etuvhm.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				</Swiper>
			</div>
		</div>
	</div>
    </>
  );
};

export default CardsMehsullar;
