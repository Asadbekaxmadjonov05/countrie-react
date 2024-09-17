import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import { EffectCube, Pagination, Autoplay} from 'swiper/modules';

export default function App() {
    const demoArr =[
        "https://flagcdn.com/wf.svg",
        "https://flagcdn.com/is.svg",    
        "https://flagcdn.com/lu.svg",
        "https://flagcdn.com/ml.svg",
        "https://flagcdn.com/km.svg",
        "https://flagcdn.com/au.svg",
        "https://flagcdn.com/ee.svg",
        "https://flagcdn.com/ca.svg",
        "https://flagcdn.com/by.svg",
        "https://flagcdn.com/gy.svg",    ]
  return (
    <div>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
          
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      >
        {demoArr.map(item => (
            <SwiperSlide >
                <img src={item} alt="img" />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
