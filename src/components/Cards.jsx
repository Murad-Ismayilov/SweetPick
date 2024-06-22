import React from 'react'

import './Card.css'
import { Autoplay } from 'swiper/modules';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

const Cards = () => {
  return (
    <>
    <div id="content">

<div class="about-content">
    


    <div class="services">
        <div class="container">

            <div class="title">
                <h1><i class="fa fa-star"></i> Our Benefits <i class="fa fa-star"></i></h1>
                <div class="title-border"></div>
            </div>

            <div class="row">

                <Swiper 
                slidesPerView={4}
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
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                    },
                }}
				modules={[Autoplay]}
                className='mySwiper'>
                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                            <i class="fa fa-plane"></i>
                            <h4>FAST DELIVERY</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                            <i class="fa fa-eye"></i>
                            <h4>Retine Ready</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                        <i class="fa-regular fa-comments"></i>
                            <h4>Quality Support</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                        <i class="fa-solid fa-shield-halved"></i>
                            <h4>100% Guarantee</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                            <i class="fa fa-plane"></i>
                            <h4>FAST DELIVERY</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                            <i class="fa fa-eye"></i>
                            <h4>Retine Ready</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                        <i class="fa-regular fa-comments"></i>
                            <h4>Quality Support</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-6 col-lg-12">
                        <div class="serv-box">
                        <i class="fa-solid fa-shield-halved"></i>
                            <h4>100% Guarantee</h4>
                            <div class="serv-border"></div>
                            <p>We possess within us two minds. So far I have written only of the conscious mind.</p>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards