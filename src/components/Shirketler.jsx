import React from 'react'

import './Shirket.css'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay} from 'swiper/modules';


// import required modules


const Shirketler = () => {
  return (
    <div className=''>

      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      className='mySwiper'
      >
      <SwiperSlide>
      <div className="col-12 col-md-6 col-lg-12">
      <div className="card text-bg-dark pb-0 ">
        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717607828/slider1_mtpiz3.webp" className="sabitHundurluk" alt="" />
        <div className="card-img-overlay">
          <h5 className="card-title">	Hot Trends of This Year	</h5>
          <p><img src="/assets/image/s-border.webp" alt="" id='s-border'/> </p>
          <p className="card-text">	NEW AUTUMN COLLECTION</p>
          <a href="#" class="btn"> SHOP NOw </a>
        </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="col-12 col-md-6 col-lg-12">
      <div className="card text-bg-dark pb-0 ">
        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717607827/slider2_vcjj5k.webp" className="sabitHundurluk" alt="" />
        <div className="card-img-overlay">
        <h5 className="card-title">	Hot Trends of This Year	</h5>
          <p><img src="/assets/image/s-border.webp" alt="" id='s-border'/> </p>
          <p className="card-text">	WINTER COLLECTION</p>
          <a href="#" class="btn"> SHOP NOw </a>
        </div>
      </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="col-12 col-md-6 col-lg-12">
      <div className="card text-bg-dark pb-0 ">
        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717607827/slider3_bqmusj.webp" className="sabitHundurluk" alt="" />
        <div className="card-img-overlay">
        <h5 className="card-title " id='h5' style={{color:"#000"}}>	Hot Trends of This Year	</h5>
          <p className="card-text" style={{margin: "45px -522px 0 0", color: "#000"}}>	Summer<br/> <br/> <br/>Trends</p>
          <p><img src="/assets/image/s-border.webp" alt="" id='s-border' style={{margin: "-22px 0 -24px 835px"}}/> </p>
          <a href="#" id="button" class="btn"> SHOP NOw </a>
        </div>
      </div>
      </div>
      </SwiperSlide>
      </Swiper>
    </div>
    
  )
}
export default Shirketler