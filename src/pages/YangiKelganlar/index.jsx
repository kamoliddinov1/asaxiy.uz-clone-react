import React from "react";
import YangiKelganlar from "../../components/CartPage/NewcomersCart";
import Sidebar from "../../components/CartPage/NewcomersCart/BodySidebar";
import { ContainerStComp } from "../style.js";
import { Box } from "@mui/material";
import FilterMobile from "../../components/Header/Filter";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Box sx={{rowGap: 3}}>
    <ContainerStComp>
    <FilterMobile>
        <Sidebar />
      </FilterMobile>
      <Box sx={{marginTop:"10px", display:{xs:'none', md:'block'}}}><Sidebar /></Box>
      <YangiKelganlar />
    </ContainerStComp>
  </Box>
);