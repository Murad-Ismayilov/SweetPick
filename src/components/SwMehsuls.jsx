import React, { useState } from 'react';

import './SwMehsul.css'

import { Autoplay, Navigation } from 'swiper/modules';

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwMehsuls = () => {
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
        <div className='feat-items '>
        <div className="container">
            <div className="row">

                <div className="div">
                    <div className="ddsdf">
                    <div>
                        <h1> Featured Items </h1>
                    </div>

                    <div>
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                    </div>
                    </div>
                </div>

                
            </div>

            </div>



    </div>

        <div className='py-5 SwMehsul'>
        <div className="container">
            <div className="row">

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


                  modules={[Autoplay, Navigation]}
                slidesPerView={4}
                navigation={{
                    prevEl: '.fa-chevron-left',
                    nextEl: '.fa-chevron-right',
                }}
                className='mySwiper'>
              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967036/new_zk2oto.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival1_kevqbb.webp" className="Hundurluk" alt="..." />

                    <div className="card-body">
                      <h5 className="brown"> Brown Coat </h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[0].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 0, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival2_qnqsie.webp" className="Hundurluk" alt="..." />

                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival3_eln4we.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                  <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://www.max-themes.net/demos/sweetpick/upload/arrival9.jpg" className="Hundurluk" alt="..."/>
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival5_k0m5du.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival6_unniop.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival7_nnmase.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival8_gzlc2c.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
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
    </>
  )
}


export default SwMehsuls