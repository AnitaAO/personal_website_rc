import React from 'react';
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Testimonial = () => {
  return (
    <div className="t-wrapper">

      {/* the heading */}
      <div className="t-header">
        <span>What clients</span>
        <span>Are saying</span>
        <span>About me...</span>
        <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
      </div>

      {/* the slider */}
      <Swiper>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
};

export default Testimonial;
