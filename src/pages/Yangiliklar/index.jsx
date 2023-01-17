import React from "react";
import Yangiliklar from "../../components/CartPage/NewsCard";
import Sidebar from "../../components/CartPage/NewsCard/BodySidebar";
import { WrapperGrid } from "../style.js";
import { Box } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Box sx={{rowGap: 3, mt:4}}>
    <WrapperGrid>
      <Yangiliklar />
      <Sidebar/>
    </WrapperGrid>
  </Box>
);