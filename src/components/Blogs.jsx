import React from 'react'
import './Blogs.css'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay} from 'swiper/modules';


const Blogs = () => {
  return (
    <>
    	<div class="blog">
			<div class="container">
				<div class="title">
					<h1 className='hi'><i class="fa fa-star"></i> FROM BLOG <i class="fa fa-star"></i></h1>
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
						<div class="col-12 col-md-12 col-lg-12 infos">
							<div class="blog-item">
								<div class="blog-img">
									<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog1_xnpal1.webp" alt=""/></a>
										<div class="calendar">
											<p>02</p>
											<span>dec</span>	
										</div>
										<a href="#"><h3>This is blog post title. You can edit.</h3></a>
										<div class="blog-border"></div>
										<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
					<div class="col-12 col-md-12 col-lg-12">
						<div class="blog-item">
							<div class="blog-img">
								<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog2_ocjk54.webp" alt=""/></a>
								<div class="calendar">
									<p>12</p>
									<span>jan</span>	
								</div>
									<a href="#"><h3>This is blog post with a gallery.</h3></a>
									<div class="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
							</div>
						</div>
					</div>
					</SwiperSlide>

					<SwiperSlide>
					<div class="col-12 col-md-12 col-lg-12">
						<div class="blog-item">
							<div class="blog-img">
								<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog3_t6sazl.webp" alt=""/></a>
								<div class="calendar">
									<p>18</p>
									<span>MAr</span>	
								</div>
									<a href="#"><h3>5 reasons to buy this Gorgeous theme.</h3></a>
									<div class="blog-border"></div>
									<p>We possess within us two minds. So far I have written only of the conscious mind.</p>
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

export default Blogs