import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import zainab from "../assets/zainabNew.mp4";
import zainabThumb from "../assets/zainabThumb.jpeg";
import  review2 from "../assets/zestReview2.mp4"; 
import maseraw from '../assets/maseraw.mp4';

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = [

    { id: 1, url: zainab, thumbnail: zainabThumb },
    { id: 2, url: review2,  },
    { id: 4, url: maseraw,  } ,
 
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition duration-200"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-xl" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition duration-200"
      onClick={onClick}
    >
      <FaArrowRight className="text-white text-xl" />
    </div>
  );

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 mt-20 py-8">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`px-2 transition-transform duration-500 ease-in-out  rounded-2xl
        
            `}
          >
            <video
              className="w-full     rounded-2xl border-4 border-gray-200 shadow-lg"
              controls
              poster={video.thumbnail || undefined}
            >
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Videos;
