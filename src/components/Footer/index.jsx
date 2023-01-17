import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsYoutube, BsTelephone } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { data5 } from "./Item";
import { useNavigate } from "react-router-dom";

const data1 = [
  {
    id: 1,
    title: "Ommaviy oferta (Foydalanuvchi bitimi)",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: 2,
    title: "Muddatli toʻlov asosida sotib olishning umumiy qoidalari",
    link: "https://asaxiy.uz/page/oferta-rassrochka",
  },
  {
    id: 3,
    title: "Muddatli toʻlov shartlari",
    link: "https://asaxiy.uz/page/usloviya-rassrochki",
  },
  {
    id: 4,
    title: "Tovarlarni yetkazib berish va toʻlov turlari",
    link: "https://asaxiy.uz/page/delivery",
  },
  {
    id: 5,
    title: "Buyurtmani bekor qilish va tovarni qaytarish",
    link: "https://asaxiy.uz/page/refund",
  },
  { id: 6, title: "Biz haqimizda", link: "https://asaxiy.uz/page/about" },
];

const data2 = [
  {
    id: 1,
    icon: <BsTelephone />,
    title: "+998 71 200 01 05",
    link: "+998 71 200 01 05",
  },
  { id: 2, icon: <CiMail />, title: "info@asaxiy.uz", link: "info@asaxiy.uz" },
  {
    id: 3,
    icon: <CiLocationOn />,
    title: "Chilonzor 3, Toshkent",
    link: "https://asaxiy.uz/?language=uz",
  },
];

const data3 = [
  { id: 1, title: <FaFacebookF />, link: "https://www.facebook.com/asaxiy/" },
  { id: 2, title: <FaTelegramPlane />, link: "https://t.me/asaxiyuz" },
  {
    id: 3,
    title: <BsInstagram />,
    link: "https://www.instagram.com/asaxiyshop/",
  },
  {
    id: 4,
    title: <BsYoutube />,
    link: "https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ",
  },
];

const data4 = [
  {
    id: "1",
    img: "https://asaxiy.uz/custom-assets/images/click-logo.svg",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: "2",
    img: "https://asaxiy.uz/custom-assets/images/payme.svg",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: "3",
    img: "https://asaxiy.uz/custom-assets/images/visa.svg",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: "4",
    img: "https://asaxiy.uz/custom-assets/images/mastercard.svg",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: "5",
    img: "https://asaxiy.uz/custom-assets/images/humo.svg",
    link: "https://asaxiy.uz/page/rules",
  },
  {
    id: "6",
    img: "https://asaxiy.uz/custom-assets/images/uzcard.svg",
    link: "https://asaxiy.uz/page/rules",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#008DFF",
      }}
    >
      <Box sx={{ border: "1px solid #008DFF" }}>
        <Box
          sx={{ backgroundColor: "white", m: 2, mt: 5, borderRadius: "10px" }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            {data5.map((val, id) => (
              <Grid item xs={12} sm={6} lg={3} key={id}>
                <Box
                  onClick={() => navigate(val.link)}
                  sx={{ display: "flex", alignItems: "center", m: 3 }}
                >
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

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} sm={6} lg={4}>
            <Typography sx={{ p: "5px", fontWeight: "900", color: "white" }}>
              Ma'lumotlar
            </Typography>
            {data1.map((ele, id) => (
              <Box
                key={id}
                sx={{
                  p: "5px",
                  transition: "0.5s",
                  ":hover": {
                    transform: "translateX(15px)",
                    transition: "0.5s",
                  },
                }}
              >
                <Link
                  // href={ele.link}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "90%",
                  }}
                >
                  {ele.title}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Typography sx={{ p: "5px", fontWeight: "900", color: "white" }}>
              Biz bilan aloqa
            </Typography>
            {data2.map((ele, id) => (
              <Box
                key={id}
                sx={{
                  p: "5px",
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  transition: "0.5s",
                  ":hover": {
                    transform: "translateX(15px)",
                    transition: "0.5s",
                  },
                }}
              >
                <IconButton size="small" color="inherit">
                  {ele.icon}
                </IconButton>
                <Link
                  href={ele.link}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "90%",
                  }}
                >
                  {ele.title}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <Typography sx={{ p: "5px", fontWeight: "900", color: "white" }}>
              Biz ijtimoiy tarmoqlarda :
            </Typography>
            <Box sx={{ display: "flex" }}>
              {data3.map((ele, id) => (
                <IconButton key={id} sx={{ color: "white" }} size="medium">
                  <Link
                    href={ele.link}
                    style={{
                      textDecoration: "none",
                      fontWeight: "550",
                      color: "white",
                    }}
                  >
                    {ele.title}
                  </Link>
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box mt={1}>
          <Typography sx={{ borderBottom: "0.1px solid white" }} />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={2} md={3} lg={1}>
              <Typography sx={{ fontWeight: "bold", color: "white" }}>
                To'lov turlari:
              </Typography>
            </Grid>
            {data4.map((val, id) => (
              <Grid item xs={3} sm={1} md={1} lg={1} key={id}>
                <Box sx={{ p: "5px" }}>
                  <img style={{ width: "50px" }} src={val.img} alt="tolov" />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ borderBottom: "0.1px solid white" }} />
        </Box>

        <Box sx={{ p: "5px" }}>
          <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "center", mb: 2, mt: 1 }}
          >
            2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
            boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga
            oshiriladi. Barcha huquqlar himoyalangan.
          </Typography>
           <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "center", mb: 2, mt: 1 }}
          >
            Iqror Kamoliddinov tomonidan clone qilindi 2023 yil.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
