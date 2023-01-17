import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

const data1 = [
  {
    id: 1,
    img: "https://assets.asaxiy.uz/news/product//6287848d9e3ba.jpg",
    title: "Yoshlar el-yurt ishonchi.",
    sana: "20-05-2022",
    korilgan: "12899",
    desc: "",
  },
  {
    id: 2,
    img: "https://assets.asaxiy.uz/news/product//5fb76504ce51a.jpg",
    title: "Представлен Oppo X 2021 — смартфон с...",
    sana: " 31-10-2022",
    korilgan: "332",
    desc: "",
  },
  {
    id: 3,
    img: "https://assets.asaxiy.uz/news/product//5f22af88a918e.jpg",
    title: "Xiaomi Mi Band 5 Смарт браслетидаги ўзгариш ва..",
    sana: " 30-10-2022",
    korilgan: "274",
    desc: "",
  },
];

const OmmabopYangiliklar = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontWeight: "600", fontSize: "16px", color: "gray" }}>
        Ommabop Yangililar
      </Typography>
      <Box sx={{}}>
        {data1.map((ele, id) => (
          <Paper
            key={id}
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
              p: 1,
              borderRadius: "15px",
              columnGap: 1,
            }}
          >
            <Box sx={{ width: "100px", height: "55px" }}>
              <img
                style={{ borderRadius: "12px", width: "100px", height: "55px" }}
                src={ele.img}
                alt="#"
              />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "600", fontSize: "12px" }}>
                {ele.title}
              </Typography>
              <Box sx={{ display: "flex", columnGap: 2 }}>
                <Box sx={{ fontWeight: "600", fontSize: "12px" }}>
                  <FaCalendarAlt color="blue" /> {ele.sana}
                </Box>
                <Box sx={{ fontWeight: "600", fontSize: "12px" }}>
                  <FaEye color="blue" /> {ele.sana}
                </Box>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default OmmabopYangiliklar;
