import React from 'react'
import Shirket from './Shirket'

import slider1 from '/assets/image/slider1.webp'
import slider2 from '/assets/image/slider2.webp'
import slider3 from '/assets/image/slider3.webp'

import sborde from '/assets/image/s-border.webp'

import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const Shirketler = () => {
  return (
    <div className=''>

      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
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
          spaceBetween: 40,
        },
        1024: {
          slidesPerView:1,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className='mySwiper'
      >
        <SwiperSlide><Shirket shekilXususiyyeti={slider1} metn="Hot Trends of This Year" img={sborde} paragraf="NEW AUTUMN COLLECTION" a="SHOP NOW"/></SwiperSlide>
        <SwiperSlide><Shirket shekilXususiyyeti={slider2} metn="Hot Trends of This Year" img={sborde} paragraf="WINTER COLLECTION" a="SHOP NOW"/></SwiperSlide>
        <SwiperSlide><Shirket shekilXususiyyeti={slider3} metn="Hot Trends of This Year"  paragraf="SUMMER TRENDS" img={sborde} a="SHOP NOW"/></SwiperSlide>



        
      </Swiper>

    </div>
    
  )
}
export default Shirketler