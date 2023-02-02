import React from 'react';
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import profilePics1 from '../../img/profile1.jpg';
import profilePics2 from '../../img/profile2.jpg';
import profilePics3 from '../../img/profile3.jpg';
import profilePics4 from '../../img/profile4.jpg';

const Testimonial = () => {
  const clients = [
    { img: profilePics1,
      review: ''
    },
    {
      img: profilePics2,
      review: ''
    },
    {
      img: profilePics3,
      review: ''
    },
    {
      img: profilePics4,
      review: ''
    }
  ]

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
        {clients.map((client, index) =>{
          return(
            <SwiperSlide
              key={index}
            >
              <img src={client.img} alt='client' />
              <span>{client.review}</span>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};

export default Testimonial;
