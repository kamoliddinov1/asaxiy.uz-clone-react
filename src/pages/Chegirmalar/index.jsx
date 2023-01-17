import React from "react";
import Chegirmalar from "../../components/CartPage/DiscountCard";
import Sidebar from "../../components/CartPage/DiscountCard/BodySidebar";
import { ContainerStComp } from "../style.js";
import { Box } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Box sx={{rowGap: 3}}>
    <ContainerStComp>
      <Sidebar/>
      <Chegirmalar />
    </ContainerStComp>
  </Box>
);