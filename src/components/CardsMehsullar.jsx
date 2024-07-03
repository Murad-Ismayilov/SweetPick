import React, { useState } from 'react';
import './CardsMehsullar.css';

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const CardsMehsullar = () => {
  const [stars, setStars] = useState([
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
  ]);

  const handleClick = (event, prodIndex, starIndex) => {
    event.preventDefault();
    setStars(stars.map((prodStars, i) => 
      i === prodIndex 
        ? prodStars.map((star, j) => j === starIndex ? !star : star) 
        : prodStars
    ));
  };

  return (
    <>
      <div className="feature-prods" style={{ background: '#f7f7f7' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fprod-item">
                <h1 className="prot-title">Special Offer</h1>

                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717685713/fproditem1_fbxqjz.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Black Leather Jacket</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[0].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 0, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717685713/fproditem2_1_qio4t0.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Black Man Suit</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[1].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 1, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686815/fproditem3_euncvo.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Grey California Dress</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[2].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 2, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fprod-item">
                <h1 className="prot-title">Best Sellers</h1>

                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem4_faaipa.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Brown Leather Bag</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[3].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 3, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem5_bctqqk.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Business Suit</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[4].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 4, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem6_qurelx.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>White Elegant Dress</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[5].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 5, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fprod-item">
                <h1 className="prot-title">Top Rated</h1>

                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717686796/fproditem7_btfmm5.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Elegant Dress</h3>
                        <p className="price-h">$ 299.99</p>
                        <div>
                          {stars[6].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 6, index)}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688485/fproditem8_ba0oj3.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Yellow Sweater</h3>
                        <p className="price-h">$ 299.99</p>
                        <div>
                          {stars[7].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 7, index)}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688491/fproditem9_qhdcv3.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Brown Leather Jacket</h3>
                        <p className="price-h">$ 299.99</p>
                        <div>
                          {stars[8].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 8, index)}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="fprod-item">
                <h1 className="prot-title">Sales</h1>

                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688492/fproditem10_pbncpw.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Brown Lady Shoes</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[9].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 9, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688492/fproditem11_m6ibpd.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Denim Grey Suit</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[10].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 10, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717688493/fproditem12_bhve2y.webp"
                        alt=""
                      />
                      <div className="fproditem-text">
                        <h3>Man Black Suit</h3>
                        <p className="price-h">$ 299.99</p>
                      </div>
                      <div>
                          {stars[11].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 11, index)}
                            />
                          ))}
                        </div>
                      <span className="clear"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="container">
          <div className="row">
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
                960: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12 ">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners1_zfdt47.webp" alt="" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12 ">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners2_v4b4lh.webp" alt="" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12 ">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners3_yxwmpo.webp" alt="" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12 ">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994620/partners4_k25edj.webp" alt="" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12 ">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994611/partners5_hrpmjb.webp" alt="" /></a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994717/partners6_etuvhm.webp" alt="" /></a>
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