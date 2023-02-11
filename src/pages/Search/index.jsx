import React from "react";
import SearchCard from "../../components/CartPage/SearchCard";
import Sidebar from "../../components/CartPage/SearchCard/BodySidebar";
import { ContainerStComp } from "../style.js";
import { Box } from "@mui/material";
import Asaxiy from "../../components/AsaxiyHaqida/AboutAsaxiy";
import FilterMobile from "../../components/Header/Filter";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Box sx={{rowGap: 3}}>
    <ContainerStComp>
    <FilterMobile>
        <Sidebar />
      </FilterMobile>
      <Box sx={{marginTop:"10px", display:{xs:'none', md:'block'}}}><Sidebar /></Box>
      <SearchCard />
    </ContainerStComp>
    <Asaxiy/>
  </Box>
);

