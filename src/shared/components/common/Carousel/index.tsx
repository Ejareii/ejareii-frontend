"use client";

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import "./style.css";

// import { Navigation } from "swiper/modules";

// const Carousel = () => {
//   return (
//     <>
//       <Swiper
//         navigation={true}
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default Carousel;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'
import { FC } from 'react';
interface CarouselProps {
  imageLink: {image_data:string}[];
}


const Carousel : FC<CarouselProps> =  ({imageLink}) => {
  let srcCustom;
  if(imageLink.length>0){
    srcCustom =imageLink[0]["image_data"]
  }
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={(e) => 
        console.log('slide change')}
      onSwiper={()=>{}}
      navigation={true}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Navigation , Pagination]}
      className="mySwiper h-[100%]"
    >
      <SwiperSlide>
        <Image
          fill
          className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          src={srcCustom||"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
          alt="Listing"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          fill
          className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={srcCustom||"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
          alt="Listing"
        />
      </SwiperSlide>
      <SwiperSlide><Image
        fill
        className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={srcCustom||"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
        alt="Listing"
      /></SwiperSlide>
      <SwiperSlide><Image
        fill
        className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
          src={srcCustom||"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
           
        alt="Listing"
      /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;