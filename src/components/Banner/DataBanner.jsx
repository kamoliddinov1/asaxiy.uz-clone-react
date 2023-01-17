import React from "react";
import { Box, Typography } from "@mui/material";
import Hours from "./Hours";

const DataBanner = () => {
  return (
    <div>
      <Box sx={{position:'relative'}}>
      <Typography
          component="img"
          sx={{
            borderRadius: "15px",
            width: "100%",
            display: { xs: "none", md: "flex" },
          }}
          src="https://assets.asaxiy.uz/uploads/toptoday/mobile/63b25f1288f66.jpeg"
          alt="logo"
        />
        <Typography
          component="img"
          sx={{
            borderRadius: "15px",
            width: "100%",
            display: { xs: "flex", md: "none" },
          }}
          src="https://assets.asaxiy.uz/uploads/toptoday/desktop/63b25f005978e.jpeg"
          alt="logo"
        />
        <Box sx={{ position:'absolute', bottom:'4%', width:'100%', display:'flex', justifyContent:'center' }}>
          <Hours />
        </Box>
      </Box>
    </div>
  );
};

export default DataBanner;
