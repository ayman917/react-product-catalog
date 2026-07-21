import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from './images';

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider className='slick-slider' {...settings}>
      <div className='slider-img'>
        <img src={images.microsoft} alt='microsoft image'/>
      </div>
      <div className='slider-img'>
       <img src={images.twitter} alt='twitter image'/>
      </div>
      <div className='slider-img'>
        <img src={images.cocacola} alt='cocacola image'/>
      </div>
      <div className='slider-img'>
        <img src={images.microsoft} alt='microsoft image'/>
      </div>
      <div className='slider-img'>
        <img src={images.twitter} alt='twitter image'/>
      </div>
    </Slider>
  );
};

export default HomeSlider;
