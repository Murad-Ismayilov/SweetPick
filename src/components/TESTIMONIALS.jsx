import React from 'react'
import './TESTIMONIALS.css'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay } from 'swiper/modules';
const TESTIMONIALS = () => {
  return (
    <>
    <div className="tesminal3 py-5">
        <div className="container">
            <div className="row">

            <div class="title">
                <h1 className='hi'><i class="fa fa-star"></i> TESTIMONIALS <i class="fa fa-star"></i></h1>
                <div class="title-border"></div>
            </div>

            <div className="bx-wrapper">
                
        <Swiper 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className='mySwiper'
        >
        <SwiperSlide>
          <li>
            <p> Don't cry because it's over, smile because it happened. We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you. Alexander Samokhin / CEO of Company Don't cry because it's over, smile because it happened. We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you. </p>
            <span class="user"> Astrit Bublaku / CEO at Kikirik </span>
         </li>
        </SwiperSlide>

        <SwiperSlide>
          <li>
            <p> Don't cry because it's over, smile because it happened. We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you. Alexander Samokhin / CEO of Company Don't cry because it's over, smile because it happened. We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you. </p>
            <span class="user"> Astrit Bublaku / CEO at Kikirik </span>
         </li>
        </SwiperSlide>

         </Swiper>
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
  )
}

export default TESTIMONIALS