import { Typography, Box } from "@mui/material";
import React, { useState } from "react";

const Hours = () => {
  // function addZero(i) {
  //     if (i < 10) {i = "0" + i}
  //     return i;
  //   }

  const [d, setD] = useState(new Date());
  const [loading, setLoading] = useState();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  //   let time = h + ":" + m + ":" + s;


  return (
    <Box sx={{ display: "flex", alignItems:"center", columnGap: 1 }}>
      <Typography sx={{ backgroundColor: "#008DFF", color: "white", p: 0.5, borderRadius:'8px' }}>
        {h}
      </Typography>
      <Typography sx={{ color: "#008DFF", fontWeight:'bold' }}>:</Typography>
      <Typography sx={{ backgroundColor: "#008DFF", color: "white", p: 0.5, borderRadius:'8px' }}>
        {m}
      </Typography>
      <Typography sx={{ color: "#008DFF", fontWeight:'bold' }}>:</Typography>
      <Typography sx={{ backgroundColor: "#008DFF", color: "white", p: 0.5, borderRadius:'8px' }}>
        {s}
      </Typography>
    </Box>
  );
};

export default Hours;
