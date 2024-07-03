import React, { useState } from 'react';
import "./Mehsul.css";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Mehsullar = () => {
  const [stars, setStars] = useState([
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
      <div className="latest  ">
        <div className="container">
          <div className="row">
            <div class="filter clearfix">
              <div class="holder">
                <ul>
                  <li>
                    <a href="#" class="active" data-filter="*">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".class1">
                      <i class="fa fa-star"></i> NEW ARRIVALS
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".class2">
                      <i class="fa fa-star"></i> BESTSELLERS
                    </a>
                  </li>
                  <li>
                    <a href="#" data-filter=".class3">
                      <i class="fa fa-star"></i> FEATURED{" "}
                      <i class="fa fa-star"></i>
                    </a>
                  </li>
                </ul>
                <div class="holder-border"></div>
              </div>
            </div>

            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              slidesPerView={4}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967036/new_zk2oto.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival1_kevqbb.webp" class="Hundurluk" alt="..." />

                    <div class="card-body">
                      <h5 class="brown"> Brown Coat </h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[0].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 0, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival2_qnqsie.webp" class="Hundurluk" alt="..." />

                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[1].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 1, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival3_eln4we.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[2].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 2, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival4_at2kwr.webp" class="Hundurluk" alt="..."/>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716971941/out_xwgg4o.webp" alt="" className="out" />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[3].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 3, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival5_k0m5du.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[4].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 4, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival6_unniop.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
                          {stars[5].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700', }}
                              onClick={(e) => handleClick(e, 5, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival7_nnmase.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
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
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival8_gzlc2c.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", paddingBottom: "30px" }}>
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
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>

      <div class="middle-content">
        <div class="container">
          <h1>
            FREE SHIPPING <span>ALL ORDERS OVER $150</span>
          </h1>
          <div class="middle-shipp">
            <p>We will ship your item within 3 days</p>
            <div class="mid-border"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mehsullar;
