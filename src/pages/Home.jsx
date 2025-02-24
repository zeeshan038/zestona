import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.png';
import Products from './Products';


const Home = () => {
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
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className="w-full" />
        </div>
        <div>
          <img src={banner1} alt="Banner 2" className="w-full" />
        </div>
        <div>
          <img src={banner1} alt="Banner 3" className="w-full" />
        </div>
      </Slider>
    </div>
    <Products/>
     </div>
  );
};

export default Home;
