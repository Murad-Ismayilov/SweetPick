import React from 'react'
import Introduction from './Introduction'

import sborde from '/assets/image/s-border.webp'


import slider4 from '/assets/image/slider4.webp'

import slider2 from '/assets/image/slider2.webp'


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay} from 'swiper/modules';

const Introductions = () => {
  return (
    <>
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
            slidesPerView: 1,
            spaceBetween: 50,
            },
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwiper'>
        <SwiperSlide><Introduction ShekilXususiyyeti={slider4} bashliq="Discount 50% Off" img={sborde} paragraf="Hot trends sales" article="We possess within us two minds. So far I have written" a="SHOP NOW" b="LEARN MORE "/></SwiperSlide>
        <SwiperSlide><Introduction ShekilXususiyyeti={slider2} bashliq="Hot Trends of This Year" img={sborde} paragraf="WINTER COLLECTION" a="SHOP NOW" b="LEARN MORE "/></SwiperSlide>
    </Swiper>
    </>
  )
}

export default Introductions