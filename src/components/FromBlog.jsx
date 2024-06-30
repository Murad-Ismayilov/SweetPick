import React from 'react'
import './FromBlog.css'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay} from 'swiper/modules';


const FromBlog = () => {
  return (
    <>
    <div class="partners">
		<div class="container">
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
                    slidesPerView: 4,
                    spaceBetween: 40,
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
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners1_zfdt47.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners2_v4b4lh.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners3_yxwmpo.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994620/partners4_k25edj.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994611/partners5_hrpmjb.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-6 col-lg-12 kc">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994717/partners6_etuvhm.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				</Swiper>
			</div>
		</div>
	</div>
	<div className="call-to-action pb-5">
			<h1 className='call'> You will find more items in our store. </h1>
			<p> You can put any important text for your customer here. This is call to action area. </p>
			<a href="" class="medium-button button-red"> go shopping </a>
	</div>
    </>
  )
}

export default FromBlog