import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PhoneImg from "../../assets/asaxiytel.png";

const FooterBanner = () => {
  return (
    <Box
      className="imbannerfoter"
      sx={{
        backgroundColor: "#008DFF",
        display: "flex",
        justifyContent:'center',
        alignItems: "center",
        m: "3% 3%",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex" },
          justifyContent:"center",
          width: "50%",
          p: 2
        }}
      >
        <img style={{width: "70%"}} src={PhoneImg} alt="df" />
      </Box>

      <Box sx={{ textAlign: "center", width: "50%" }}>
          <img
            src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
            alt="asaxiyLogo"
          />
        <Typography sx={{ fontWeight: "400", color: "white", m: 1 }}>
          Sizning internet do'koningiz
        </Typography>
        <Box sx={{columnGap: 2}}>
          <img
            style={{margin: 2}}
            src="https://asaxiy.uz/custom-assets/images/google-play.svg"
            alt="appStore"
          />
          <img
            style={{margin: 2}}
            src="https://asaxiy.uz/custom-assets/images/google-play.svg"
            alt="googlePlay"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterBanner;
