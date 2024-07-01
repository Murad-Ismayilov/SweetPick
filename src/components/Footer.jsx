import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer className='footer pt-5 pb-5'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 pb-5">
                    <h1> ABOUT SHOP </h1>
                    <p className='mb20'> We possess within us two minds. So far I have written only of the conscious mind.We further know that the subconscious has recorded every event. This is just perfect theme. </p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 pb-5 ">
                    <h1> INFORMATION </h1>
                    <ul>
                        <li>
                            <a href='#' className="a"> • Our Stores </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Delivery Information </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • About Us </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Terms and Conditions </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Privacy Policy </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Contact Us </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Returns </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3 pb-5">
                    <h1> MY ACCOUNT </h1>
                    <ul>
                        <li>
                            <a href='#' className="a"> • My Account </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Order History </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • My Wishlist </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Specials </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Track Order </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • Gift Vouchers </a>
                        </li>
                        <li>
                            <a href='#' className="a"> • My Credit Slips </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-3 gettouch pb-5">
                    <h1> GET IN TOUCH WITH US </h1>
                    <p> <i class="fa fa-home"></i> Philippines, PO Box 6200 Talay st. 65, SweetPick inc.</p>
                    <p> <i class="fa-solid fa-phone"></i>  +63 918 4084 694 </p>
                    <p> <i class="fa-solid fa-envelope"></i>  samokhinteam@gmail.com</p>
                    <h1> FIND US ON </h1>
                    <ul class="footer-socials">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-pinterest"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i class="fa fa-youtube"></i></a></li>
								</ul>
                </div>

                <div class="container">
				<div class="last-div">
					<div class="row">
						<div class="copyright">
                        <article class="container"> &copy;  2014 SweetPick Elegant Shop | <a href=""> Designed by Alexander Samokhin </a></article>
                        <a href="#"><img src="/assets/image/payments.webp" alt=""/></a>
						</div>
					
					</div>

				</div>
			</div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer