import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/zestbanner.jpeg';
import Products from './Products';
import Videos from './Videos';

const Home = () => {
  // react slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <div className="w-full">
   
          <div>
            <img src={banner1} alt="Banner 1" className="w-full" />
          </div>
      
      </div>
      <Products />
      <Videos />
    </div>
  );
};

export default Home;
