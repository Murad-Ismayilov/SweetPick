import React from 'react'

import './OurTeam.css'
import { Autoplay } from 'swiper/modules';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

const OurTeam = () => {
  return (
    <>
    <div class="testimonials2">
        <div class="container">

        <div class="title">
							<h1 className='hi' ><i class="fa fa-star"></i> Our Team <i class="fa fa-star"></i></h1>
							<div class="title-border"></div>
						</div>

            <div class="row">

                <Swiper 
                slidesPerView={3}
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
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                }}
				modules={[Autoplay]}
                className='mySwiper'>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout1_eriok1.webp" alt="" />
                            <h4>FAST DELIVERY</h4>
                            <div class="team-border"></div>
                            <span> CEO of Company </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout2_p1wbbf.webp" alt="" />
                            <h4>Retine Ready</h4>
                            <div class="team-border"></div>
                            <span> Manager of Company </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout3_fenjrm.webp" alt="" />
                            <h4>Quality Support</h4>
                            <div class="team-border"></div>
                            <span> Marketing </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout1_eriok1.webp" alt="" />
                            <h4>FAST DELIVERY</h4>
                            <div class="team-border"></div>
                            <span> CEO of Company </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                            <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout2_p1wbbf.webp" alt="" />
                            <h4>Retine Ready</h4>
                            <div class="team-border"></div>
                            <span> Manager of Company </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="col-12 col-md-12 col-lg-12">
                        <div class="team-box">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717928427/teamabout3_fenjrm.webp" alt="" />
                            <h4>Quality Support</h4>
                            <div class="team-border"></div>
                            <span> Marketing </span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
			          		</ul>
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

export default OurTeam