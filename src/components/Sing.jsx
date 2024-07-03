import React, { useState } from 'react';
import './Sing.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Sing = () => {
  const [selectedImage, setSelectedImage] = useState("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/1_tb_tfycaq.webp");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  }

  const [stars, setStars] = useState([
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, true, true, false],

    
  ]);

  const handleClick = (event, prodIndex, starIndex) => {
    event.preventDefault();
    setStars(stars.map((prodStars, i) => 
      i === prodIndex 
        ? prodStars.map((star, j) => j === starIndex ? !star : star) 
        : prodStars
    ));
  };
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div id="content">

    <div class="product-page container">
    
    <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
        <div class="single-img">
        <div className="sp-large">
                  <img src={selectedImage} alt="" className='sp-current-big' />
                </div>
                <div className="sp-thumbs sp-tb-active">
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/1_tb_tfycaq.webp")} className='sp-current sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/1_tb_tfycaq.webp" alt="" className='sing-img' />
                  </a>
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/2_tb_igwsyx.webp")} className='sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/2_tb_igwsyx.webp" alt="" className='sing-img' />
                  </a>
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/3_tb_equqap.webp")} className='sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/3_tb_equqap.webp" alt="" className='sing-img' />
                  </a>
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/4_tb_ubfzeh.webp")} className='sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/4_tb_ubfzeh.webp" alt="" className='sing-img' />
                  </a>
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/5_tb_wyk583.webp")} className='sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/5_tb_wyk583.webp" alt="" className='sing-img' />
                  </a>
                  <a onClick={() => handleImageClick("https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/6_tb_ps1o6c.webp")} className='sing'>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1717831115/6_tb_ps1o6c.webp" alt="" className='sing-img' />
                  </a>
                </div>
            <div id="test"></div>
        </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
        <div class="single-desc">
            <div class="top-single">
            <span className='top-single-span'>Shop  /  Men  /  Jackets  /  Black Leather Jacket</span>
            <div class="right-arrows">
                <a href="#"><i class="fa fa-angle-left"></i></a>
                <a href="#"><i class="fa fa-angle-right"></i></a>
            </div>
                <div class="clear"></div>
            </div>

            <div class="middle-single">
            
            <h1 className='middle-single-h1'>Black Leather Jacket</h1>

            
            <div class="reviews" style={{display:"flex"}}>
            <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7", margin: "0px 20px 0 0" }}>
                          {stars[8].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 8, index)}
                            />
                          ))}
                        </div>
                <a href="#">21 Rewiew(s)</a>  
                <a href="#">Add a Review</a>
            </div>
                <div class="clear"></div>

            </div>
                    
            <div class="single-price">
            <ul>
                <li><span class="high-price">$1 899.00</span></li>
                <li><span class="low-price">$1 299.00</span></li>
            </ul>
            </div>

            <div class="single-infos">
                <p><span>Brand:</span> Calvin Klein </p>
                <p><span>Product Code:</span> 00019 </p>
                <p><span>Availability:</span> In Stock </p>	
            </div>

            <div class="single-inputs row">
            <div class="col-md-6">
                <select class="select">
                <option value="Select Size">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                </select>
            </div>
            <div class="col-md-6">
                <select class="select">
                <option value="Select Color">Select Color</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                </select>
            </div>
            </div>
            

            
            <div class="prod-end">
            <a href="#" class="medium-button button-red add-cart">Add to Cart</a>
            <input type="text" placeholder="1"/>
            <ul>
                <li><a href="#" class="wishlist"><i class="fa fa-heart"></i> Add to Wishlist</a></li>
                <li><a href="#" class="compare"><i class="fa fa-retweet"></i>Add to Compare</a></li>
            </ul>
            <div class="clear"></div>

            </div>

            <div class="single-descript">
            <p>We possess within us two minds. So far I have written only of the conscious mind.. Our subconscious mind contains such power and complexity that it literally staggers the imagination. We know that this subconscious mind controls and orchestrates our bodily functions, from pumping blood to all parts of our body.</p>
            </div>

            <div class="share">
            <span>Share</span>
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
        </div>
    </div>
    </div>
    </div>
    <div class="tabs-single">
                    <div class="container">

                    <div id="tabs">
      <ul className="tab-links clearfix">
        <li className={activeTab === 'description' ? 'active' : ''}>
          <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('description'); }}>Description</a>
        </li>
        <li className={activeTab === 'clean' ? 'active' : ''}>
          <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('clean'); }}>Clean</a>
        </li>
        <li className={activeTab === 'reviews' ? 'active' : ''}>
          <a href="#" onClick={(e) => { e.preventDefault(); handleTabClick('reviews'); }}>Reviews</a>
        </li>
      </ul>
      <div className="tab-border"></div>
      <div id="description" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>
        <ul>
          <li>
            <p>We possess within us two minds. So far I have written only of the conscious mind.. Our subconscious mind contains such power and complexity that it literally staggers the imagination. We know that this subconscious mind controls and orchestrates our bodily functions, from pumping blood to all parts of our body. We possess within us two minds. So far I have written only of the conscious mind.. Our subconscious mind contains such power and complexity that it literally staggers the imagination. We know that this subconscious mind controls and orchestrates our bodily functions, from pumping blood to all parts of our body.</p>
          </li>
        </ul>
      </div>
      <div id="clean" style={{ display: activeTab === 'clean' ? 'block' : 'none' }}>
        <ul>
          <li>
            <p>We possess within us two minds. So far I have written only of the conscious mind.. Our subconscious mind contains such power and complexity that it literally staggers the imagination. We know that this subconscious mind controls and orchestrates our bodily functions, from pumping blood to all parts of our body. We possess within us two minds. So far I have written only of the conscious mind.. Our subconscious mind contains such power and complexity that it literally staggers the imagination. We know that this subconscious mind controls and orchestrates our bodily functions, from pumping blood to all parts of our body.</p>
          </li>
        </ul>
      </div>
      <div id="reviews" style={{ display: activeTab === 'reviews' ? 'block' : 'none' }}>
        <div className="rating">
          <strong>John Doe</strong>
          <p>Great Product, I give it a 4 star review.</p>
          <div className="stars">
            {stars[1].map((star, index) => (
              <i
                key={index}
                className={star ? 'fas fa-star' : 'far fa-star'}
                style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700' }}
                onClick={(e) => handleClick(e, 1, index)}
              />
            ))}
          </div>
        </div>
        <hr style={{ border: '3px solid #f1f1f1' }} />
      </div>
    </div>



                    </div>
    
    <div className='feat'>
    <div className="container">
        <div className="row">

            <div className="div">
                <div className="ddsdf" >
                <div>
                    <h1> RELATED ITEMS </h1>
                </div>

                <div>
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
                </div>
                </div>
            </div>

            
        </div>

        </div>



</div>
    <div className='py-5' style={{background:'#f7f7f7'}}>
    <div className='container'>
        <div className="row">

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
                    slidesPerView: 4,
                    spaceBetween: 50,
                    },
                }}


                  modules={[Autoplay, Navigation]}
                slidesPerView={4}
                navigation={{
                    prevEl: '.fa-chevron-left',
                    nextEl: '.fa-chevron-right',
                }}
                className='mySwiper'>
            <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967036/new_zk2oto.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival1_kevqbb.webp" class="Hundurluk" alt="..." />

                    <div class="card-body">
                      <h5 class="brown"> Brown Coat </h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[0].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 0, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival2_qnqsie.webp" class="Hundurluk" alt="..." />

                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[1].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 1, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival3_eln4we.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[2].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 2, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival4_at2kwr.webp" class="Hundurluk" alt="..."/>
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716971941/out_xwgg4o.webp" alt="" className="out" />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[3].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 3, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716967035/sale_wksae3.webp" className="new" alt="" />
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival5_k0m5du.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[4].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 4, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881784/arrival6_unniop.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial"> $899.00 </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[5].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 5, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival7_nnmase.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[6].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 6, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-12 col-md-12 col-lg-12">
                  <div class="card border-0 rounded-0">
                    <img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716881785/arrival8_gzlc2c.webp" class="Hundurluk" alt="..." />
                    <div class="card-body">
                      <h5 class="brown">Brown Coat</h5>
                      <p class="arial d-flex text-align-center">
                        <span className="span"> $1.199.00 </span>$899.00
                      </p>
                    </div>
                    <div style={{textAlign: "center", alignItems: "center", background: "#f7f7f7" }}>
                          {stars[7].map((star, index) => (
                            <i
                              key={index}
                              className={star ? 'fas fa-star' : 'far fa-star'}
                              style={{ cursor: 'pointer', fontSize: '15px', color: '#ffd700'}}
                              onClick={(e) => handleClick(e, 7, index)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
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
				<div class="col-12 col-md-12 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners1_zfdt47.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-12 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners2_v4b4lh.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-12 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994498/partners3_yxwmpo.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-12 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994620/partners4_k25edj.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-12 col-lg-12 ">
					<a href="#"><img src="https://res.cloudinary.com/djmsfwo8n/image/upload/v1716994611/partners5_hrpmjb.webp" alt=""/></a>
				</div>
				</SwiperSlide>

				<SwiperSlide>
				<div class="col-12 col-md-12 col-lg-12">
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

export default Sing