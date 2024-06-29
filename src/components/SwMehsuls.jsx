import React from 'react'

import './SwMehsul.css'

import { Autoplay, Navigation } from 'swiper/modules';

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwMehsuls = () => {
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
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967036/new_zk2oto.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival1_kevqbb.webp" className="Hundurluk" alt="..." />

                    <div className="card-body">
                      <h5 className="brown"> Brown Coat </h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival2_qnqsie.webp" className="Hundurluk" alt="..." />

                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival3_eln4we.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival4_at2kwr.webp" className="Hundurluk" alt="..."/>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716971941/out_xwgg4o.webp" alt="" className="out" />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival5_k0m5du.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival6_unniop.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial"> $899.00 </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival7_nnmase.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival8_gzlc2c.webp" className="Hundurluk" alt="..." />
                    <div className="card-body">
                      <h5 className="brown">Brown Coat</h5>
                      <p className="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
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