import React, { useState } from 'react';
import './BlogContainer.css';

import {Pagination, Navigation } from 'swiper/modules';

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import 'swiper/css';

const BlogContainer = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="content">
      <div className="blog-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <div className="blog-img pb-5">
                <a href="#"> 
                  <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog1_xnpal1.webp" alt=""/> 
                </a>
                <div className="calendar">
                  <p>02</p>
                  <span>dec</span>
                </div>
                <div className="blog-content">
                  <h1>This is standard post with image</h1>
                  <div className="post-meta">
                    <a href="#"> 
                      <i className="fa-solid fa-user"></i>
                      Joeby Ragpa
                    </a>
                    <a href="#"> 
                      <i className="fa-solid fa-bookmark"></i>
                      Design
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                      15 Comments
                    </a>
                  </div>
                  <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                  <a href="#" className="small-button button-red mb10">Read More</a>
                </div>
              </div>
              
              <div className="blog-img ">

                <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
                >
                <SwiperSlide>
                <a href="#"> 
                  <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog3_t6sazl.webp" alt=""/> 
                </a>
                
                <div className="calendar">
                  <p>02</p>
                  <span>dec</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#"> 
                  <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog2_ocjk54.webp" alt=""/> 
                </a>
                
                <div className="calendar">
                  <p>02</p>
                  <span>dec</span>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#"> 
                  <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716991139/blog3_t6sazl.webp" alt=""/> 
                </a>
                
                <div className="calendar">
                  <p>02</p>
                  <span>dec</span>
                </div>
                </SwiperSlide>
                </Swiper>
                <div className="blog-content">
                  <h1>This is standard post with image</h1>
                  <div className="post-meta">
                    <a href="#"> 
                      <i className="fa-solid fa-user"></i>
                      Joeby Ragpa
                    </a>
                    <a href="#"> 
                      <i className="fa-solid fa-bookmark"></i>
                      Design
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-comment"></i>
                      15 Comments
                    </a>
                  </div>
                  <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                  <a href="#" className="small-button button-red mb10">Read More</a>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-search mb-30">
                <input type="text" placeholder="Search"/>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="shop-categories mb-30">
                <h1 className="asidetitle">Categories</h1>
                <ul>
                  <li><a href="#">Design <span>(25)</span></a></li>
                  <li><a href="#">Typography <span>(235)</span></a></li>
                  <li><a href="#">Business <span>(89)</span></a></li>
                  <li><a href="#">Photography <span>(109)</span></a></li>
                  <li><a href="#">Fashion <span>(129)</span></a></li>
                  <li><a href="#">Hot Trends <span>(123)</span></a></li>
                </ul>
              </div>
              <div className="normal-tabs left-widget mb30">
                <div className="tabs-widget clearfix">
                  <ul className="tab-links clearfix">
                    <li className={activeTab === 'description' ? 'active' : ''}>
                      <a href="#" onClick={() => handleTabClick('description')}>Popular Posts</a>
                    </li>
                    <li className={activeTab === 'clean' ? 'active' : ''}>
                      <a href="#" onClick={() => handleTabClick('clean')}>Latest Posts</a>
                    </li>
                  </ul>
                  <div id="description" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>
                    <ul>
                      <li><a href="#">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/tabswidget1_dntvic.webp" alt=""/>
                        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                        <span><i className="fa-regular fa-clock"></i> 15 June, 2014</span>
                      </a></li>
                      <li><a href="#">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/tabswidget2_sn339p.webp" alt=""/>
                        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                        <span><i className="fa-regular fa-clock"></i> 15 June, 2014</span>
                      </a></li>
                    </ul>
                  </div>
                  <div id="clean" style={{ display: activeTab === 'clean' ? 'block' : 'none' }}>
                    <ul>
                      <li><a href="#">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/tabswidget2_sn339p.webp" alt=""/>
                        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                        <span><i className="fa-regular fa-clock"></i> 15 June, 2014</span>
                      </a></li>
                      <li><a href="#">
                        <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/tabswidget1_dntvic.webp" alt=""/>
                        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                        <span><i className="fa-regular fa-clock"></i> 15 June, 2014</span>
                      </a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="flickr mb30">
									<h1 class="asidetitle">Flickr</h1>
									
									<div class="row mb20">
										<div class="col-sm-4">
											<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/gallery1_gto8zf.webp" alt=""/></a>
										</div>
										<div class="col-sm-4">
											<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/gallery2_m15hlx.webp" alt=""/></a>
										</div>
										<div class="col-sm-4">
											<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/gallery3_l4qanw.webp" alt=""/></a>
										</div>
									</div>
									
									<div class="row mb20">
										<div class="col-sm-4">
											<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/gallery4_e7jqph.webp" alt=""/></a>
										</div>
										<div class="col-sm-4">
											<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1719070876/gallery5_arn2by.webp" alt=""/></a>
										</div>
										<div class="col-sm-4">
											<a href="#"><img src="https://max-themes.net/demos/sweetpick/upload/gallery1.jpg" alt=""/></a>
										</div>
									</div>
									
							</div>

              <div class="tags mb10">
									<h1 class="asidetitle">Tags</h1>
									
									<ul>
										<li><a href="#">E-commerce</a></li>
										<li><a href="#">Elegant</a></li>
										<li><a href="#">Store</a></li>
										<li><a href="#">Clean</a></li>
										<li><a href="#">Modern</a></li>
										<li><a href="#">Fashion</a></li>
										<li><a href="#">Classic</a></li>
										<li><a href="#">Beauty</a></li>
										<li><a href="#">Jeans</a></li>
										<li><a href="#">Clothing</a></li>
									</ul>
									<div class="clear"></div>
									
								</div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
