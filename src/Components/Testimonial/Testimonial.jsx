import React from 'react';
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import profilePics1 from '../../img/profile1.jpg';
import profilePics2 from '../../img/profile2.jpg';
import profilePics3 from '../../img/profile3.jpg';
import profilePics4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import'swiper/css/pagination';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Testimonial = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    { img: profilePics1,
      review: 'I am first client'
    },
    {
      img: profilePics2,
      review: 'I am second client'
    },
    {
      img: profilePics3,
      review: 'I am third client'
    },
    {
      img: profilePics4,
      review: 'I am first client'
    }
  ]

  return (
    <div className="t-wrapper" id='Testimonials'>

      {/* the heading */}
      <div className="t-heading">
        <span>What clients</span>
        <span>are saying</span>
        <span>about me...</span>
      </div>
      <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
      <div className="blur t-blur2" style={{background: 'skyblue'}}></div>

      {/* the slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{clickable: true}}
        slidesPerView={1}
      >
        {clients.map((client, index) =>{
          return(
            <SwiperSlide
              key={index}>
              <div className='testimonial'>              
                <img src={client.img} alt='client' />
                <span
                  style={{color: darkMode? 'white': ''}}
                >
                  {client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};

export default Testimonial;
