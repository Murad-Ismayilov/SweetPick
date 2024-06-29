import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Touch.css';

import * as Yup from 'yup';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';

import { Autoplay} from 'swiper/modules';


const Touch = () => {
    const formElement = useRef();

    const initialValues = {
        name: "",
        surname: "",
        email: "",
        subject: "",
        message: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimum 3 simvoldan ibaret olmalidir")
            .max(55, "Maksimum 55 simvoldan cox olmamalidir")
            .required("Bosh buraxila bilmez ")
            .matches(/^[^\d]+$/, "Reqem daxil edile bilmez"),
        surname: Yup.string()
            .min(3, "Minimum 2 simvoldan olmalidir")
            .max(55, "Maksimum 55 simvoldan cox olmamalidir")
            .required("Bosh buraxila bilmez ")
            .matches(/^[^\d]+$/, "Reqem daxil edile bilmez"),
        email: Yup.string()
            .email("Elektron poct standartlara uygun deyil")
            .required("Elektron poct mutleq doldurulmalidir"),
        subject: Yup.string(),
        message: Yup.string()
    });

    const onSubmit = (values, { resetForm }) => {
        emailjs.sendForm('service_qciecut', 'template_y2073zp', formElement.current, 'kC_Nh5p5zAdkaRJPd')
            .then((result) => {
                toast.success("Muracietiniz qeyde alindi");
                console.log(result);
                resetForm(); // Reset form fields after successful submission
            }, (error) => {
                toast.error("Serverde xeta var. Bir az sonra cehd edin.");
                console.log(error);
            });
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (

        <>
        <div className='contact'>
            <div className="container">
                <div className="title">
                    <h1 className='hi'><i className="fa fa-star"></i> GET IN TOUCH  <i className="fa fa-star"></i></h1>
                    <div className="title-border"></div>
                </div>
                <p className="subtitle">But unfortunately for most of us our role as gardener has never been explained to us. And in misunderstanding our role, we have allowed seeds of all types, both good and bad, to enter our inner garden.</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8">
                        <div>
                            <form onSubmit={formik.handleSubmit} ref={formElement} className='form'>
                                <h2>CONTACT US</h2>
                                <div className="form-group">
                                    <input type="text" name="name" placeholder='Name*' className={`form-control my-3 shadow-none ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error-message">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="surname" placeholder='Surname*' className={`form-control my-3 shadow-none ${formik.touched.surname && formik.errors.surname ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.surname} />
                                    {formik.touched.surname && formik.errors.surname ? (
                                        <div className="error-message">{formik.errors.surname}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder='Email*' className={`form-control my-3 shadow-none ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="error-message">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="subject" placeholder='Subject*' className={`form-control my-3 shadow-none ${formik.touched.subject && formik.errors.subject ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subject} />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" placeholder='Your Message*' className={`form-control shadow-none ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}></textarea>
                                </div>
                                <button className='button-red'>SEND</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 touch">
                        <h2>INFORMATION</h2>
                        <p><i className="fa-solid fa-location-dot"></i> Little Lonsdale St, Talay Victoria 8011 Philippines</p>
                        <p><i className="fa-solid fa-phone"></i> +1 (800) 888 5260 52 63</p>
                        <p style={{color: "red"}}><i className="fa-solid fa-envelope"></i> samokhinteam@gmail.com</p>
                        <h2 style={{padding: "10px 0 0 0"}}>Business hours</h2>
                        <p>Monday – Friday: 9am to 20 pm</p>
                        <p>Saturday: 9am to 17 pm</p>
                        <p>Sunday: day off</p>
                        <h2 style={{padding: "10px 0 0 0"}}>STAY SOCIAL</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-pinterest"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
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
    );
};

export default Touch;
