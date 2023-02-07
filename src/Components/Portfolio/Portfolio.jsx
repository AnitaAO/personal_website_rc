import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>

      {/* header */}
      <div className='header-span'>
        <span style={{color: darkMode? 'white' : ''}}>Recent projects</span>
        <span>Portfolio</span>
      </div>
      {/* <span style={{color: darkMode? 'white' : ''}}>Recent projects</span>
      <span>Portfolio</span> */}


      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        scrollbar={true}
        className='portfolio-slider' 
      >
        <SwiperSlide>
          <img src={Sidebar} alt='sidebar' />
        </SwiperSlide>
        <SwiperSlide>  
          <img src={Ecommerce} alt='ecommerce' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt='hoc' />
        </SwiperSlide>
        <SwiperSlide>  
          <img src={MusicApp} alt='music app' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};

export default Portfolio;
