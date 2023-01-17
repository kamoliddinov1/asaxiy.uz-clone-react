import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pageData = [
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_tv.svg",
    name: "Televizorlar, video va audio",
    link: "/product/televison",
  },
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_pc.svg",
    name: "Kompyuterlar va orgtexnika",
    link: "/product/televison",
  },
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_book.svg",
    name: "Kitoblar",
    link: "/product/books",
  },
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_mach.svg",
    name: "Maishiy texnika",
    link: "product/sports",
  },
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_ph.svg",
    name: "Telefonlar va gadjetlar",
    link: "/product/phone",
  },
  {
    id: "pg1",
    img: "https://asaxiy.uz/custom-assets/images/icons/c_kitch.svg",
    name: "Idish-tovoqlar",
    link: "/product/books",
  },
];

const PagesHome = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", mt: 3, display:{xs:'inline-block', md:'none'}}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
        {pageData.map((ele, id) => (
          <Grid item xs={6} sm={4} key={id}>
            <Box
              onClick={() => navigate(ele.link)}
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                textAlign: "center",
                p: "20px 0px",
              }}
            >
              <Typography
                component="img"
                src={ele.img}
                alt="#"
                sx={{
                  width: { xs: "60px", sm: "100px" },
                  height: { xs: "60px", sm: "100px" },
                }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "600",
                mt: 2,
                fontSize: "14px",
              }}
            >
              {ele.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export default PagesHome;