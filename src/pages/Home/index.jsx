import React from "react";
import Banner from "../../components/Banner";
import HomeCard from "../../components/CartPage/HomeCard";
import Sidebar from "../../components/CartPage/HomeCard/BodySidebar";
import { ContainerStComp } from "../style.js";
import { Box } from "@mui/material";
import Asaxiy from "../../components/AsaxiyHaqida/AboutAsaxiy";
import HomePage from '../../components/CartPage/HomeCard/Pages';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Box sx={{ rowGap: 3 }}>
    <Banner />
    <HomePage />
    <>
      <HomeCard />
    </>
    <Asaxiy />
  </Box>
);
