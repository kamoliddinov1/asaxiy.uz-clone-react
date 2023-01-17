import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TbBasket } from "react-icons/tb";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
import { Typography, Box, IconButton } from "@mui/material";

const Tavsiya = () => {
    const kitobData = [
        {id: 1, title:"Uolter Ayzekson: Stiv Jobs", img:"https://assets.asaxiy.uz/product/main_image/desktop//5f4e05aa6ebe8.png.webp", narxi:"60 000", chgrNarxi:"6 9000"},
        {id: 2, title:"Robin Sharma: O‘lsang, kim yig‘laydi?", img:"https://assets.asaxiy.uz/product/items/desktop/e0f48988114ada340782b2354c906ebc2020120916245217810L3SDzL9FOP.jpg.webp", narxi:"29 000", chgrNarxi:""},
        {id: 3, title:"Vikas Svarup: Xarobadan chiqqan millioner", img:"https://assets.asaxiy.uz/product/items/desktop/42b90196b487c54069097a68fe98ab6f2022092911335157332agNvGYs5dZ.jpg.webp", narxi:"70 000", chgrNarxi:"75 000"},
        {id: 4, title:"Brayan Treysi: Samaradorlikning 21 yo‘li", img:"https://assets.asaxiy.uz/product/items/desktop/4e0223a87610176ef0d24ef6d2dcde3a2022012619210383165TMzTh3krZb.jpg.webp", narxi:"29 000", chgrNarxi:"35 000"},
    ]
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      >
        {kitobData.map((ele, id) => (
       <SwiperSlide key={id}>
        <Box>
        <Typography sx={{textAlign:'center', fontWeight:'550', color:'#FE7504', mt:1}}>Tavsiya</Typography>
        <Box sx={{height:'120px', width:'120px', ml:'auto', mr:'auto', mt:2}}>
        <img width="100%" src={ele.img} alt="sss" />
        </Box>
        <Typography sx={{fontSize:'14px', mt:2}}>{ele.title}</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', m:'10px 3%'}}>
            <Typography sx={{fontWeight:'550'}}>{ele.narxi}</Typography>
            <IconButton sx={{":hover":{color:'blue'}}}><TbBasket style={{ fontSize: "25px" }} /></IconButton>
        </Box>
       </SwiperSlide>
        ))};
      </Swiper>
    </>
  );
};
export default Tavsiya;