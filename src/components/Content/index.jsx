import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import { MyContainer } from "./style.js";
import LogoCarusel from '../Footer/LogoCarusel';
import FooterBanner from '../Banner/FooterBaner'
import AppBar from "../Header/AppBarBottom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      <Navbar />
      <MyContainer>
        <Outlet />
      </MyContainer>
      <LogoCarusel/>
      <FooterBanner/>
      <Footer />
      <AppBar/>
    </div>
  );
};
