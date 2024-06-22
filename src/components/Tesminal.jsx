import React from 'react'
import './Tesminal.css'


// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay } from 'swiper/modules';


const Tesminal = () => {
  return (
    <>
    <div class="testimonials">
<div class="container">
    <ul class="bxslider">

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
            <p>Wow, that’s just a great Theme. Tons of features and very well coded. Such a great support and attention  to a customer. If you are looking professional ecommerce theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.</p>

            <span class="user">Astrit Bublaku / CEO at Kikirik</span>
         </li>
         </SwiperSlide>
         <SwiperSlide>
          <li>
            <p>Wow, that’s just a great Theme. Tons of features and very well coded. Such a great support and attention  to a customer. If you are looking professional ecommerce theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you. .</p>

            <span class="user">Alexander Samokhin / CEO of Company</span>
         </li>
         </SwiperSlide>
         </Swiper>
    </ul>
</div>
</div>
    </>
  )
}

export default Tesminal