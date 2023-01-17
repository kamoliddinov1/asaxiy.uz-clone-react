import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Header/NavbarAdmin';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div>
    <Navbar/>
    <div style={{padding:'10px 6%'}}><Outlet /></div>
  </div>
);
