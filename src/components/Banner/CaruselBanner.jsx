import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/system";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper";
import "./styles.css";
import services from "../../services/caruselBanner";
import Skeleton from '@mui/material/Skeleton';

// import required modules

const CarusellBanner = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await services.getAll().then((res) => setData1(res));
    };
    fetchData();
  }, []);

  return (
    <Box>
      {data1.length > 0 ?
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          {data1.map((val, id) => (
            <SwiperSlide key={id}>
              <img style={{ width: "100%" }} src={val.img} alt={val.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        :
        <>
          <Skeleton sx={{ height: 319 }} />
        </>
      }
    </Box>
  );
};

export default CarusellBanner;
