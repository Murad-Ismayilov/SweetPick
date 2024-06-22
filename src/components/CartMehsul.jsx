import React from 'react'

import './CartMehsul.css'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';


import { Autoplay} from 'swiper/modules';



const CartMehsul = () => {
  return (
    <>
    <section class="bloq  text-white py-5">
        <div class="container">
            <div class="row ">

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
                    slidesPerView: 3,
                    spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className='mySwiper'
                >
                <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                <div class="card-group ">
                
                <div class="card text-bg-dark ">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717760200/collection1_otfm6p.webp" class="card-img" alt="..."/>
                        <div class="coll-text">
                            <span class="col-title roboto-bold">Summer Collection </span>
                            <p class="col-text ">  For Women</p>
                            <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                            </div>
                </div>
    
                </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                <div class="card-group ">
                
                <div class="card text-bg-dark ">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717760200/collection2_jlcqul.webp" class="card-img" alt="..."/>
                        <div class="coll-text">
                            <span class="col-title roboto-bold"> Collection 2014 </span>
                            <p class="col-text "> Accessories </p>
                            <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                            </div>
                    </div>
    
                </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="col-12 col-md-6 col-lg-12">
                <div class="card-group ">
                
                <div class="card text-bg-dark ">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717760200/collection3_dkvra2.webp" class="card-img" alt="..."/>
                        <div class="coll-text">
                            <span class="col-title roboto-bold"> Starts From $150 </span>
                            <p class="col-text "> Men Collection </p>
                            <a href=""> Get The Look <i class="fa fa-angle-right"></i></a>
                            </div>
                    </div>
    
                </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
    </>
  )
}

export default CartMehsul