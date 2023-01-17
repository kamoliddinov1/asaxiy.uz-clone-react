import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const data5 = [
  {
    id: 1,
    title: "Endi bozorga borishga hojat yo'q",
    title2: "Bizda qulay narxlar va uyga yetkazib berish mavjud",
    icon: "https://asaxiy.uz/custom-assets/images/icons/market.svg",
    link: "/",
  },
  {
    id: 2,
    title: "Tez yetkazib berish",
    title2: "Bizning xizmatimiz sizni ajablantiradi",
    icon: "https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg",
    link: "/",
  },
  {
    id: 3,
    title: "Siz uchun qulayliklar",
    title2:
      "Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati",
    icon: "https://asaxiy.uz/custom-assets/images/icons/return.svg",
    link: "/",
  },
  {
    id: 4,
    title: "Bo'lib tolash",
    title2: "3, 6, 9 va 12 oy davomida oldindan to'lovsiz",
    icon: "https://asaxiy.uz/custom-assets/images/icons/card.svg",
    link: "/",
  },
];

const FooterItem = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{width:'100%',height:'100%'}}>
      <Box sx={{ backgroundColor: "#F4F7FD", borderRadius: "10px" }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
          {data5.map((val, id) => (
            <Grid item xs={12} sm={12} lg={12} key={id}>
              <Box onClick={() => navigate(val.link)}  sx={{ display: "flex", alignItems: "center", m: "2px" }}>
                <Box sx={{ m: 2 }}>
                  <img src={val.icon} alt="icon" />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {val.title2}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterItem;
