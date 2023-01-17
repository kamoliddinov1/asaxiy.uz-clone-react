import React from "react";
import TelefonGadjetlarCard from "../../components/CartPage/PhonesGadjetsCard";
import Sidebar from "../../components/CartPage/PhonesGadjetsCard/BodySidebar";
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
      <TelefonGadjetlarCard />
    </ContainerStComp>
  </Box>
);
