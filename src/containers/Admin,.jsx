import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Header/NavbarAdmin';
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 220) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  });
  return (
  <div id="scrollPage">
    <Navbar/>
    <div style={{padding:'10px 6%'}}><Outlet /></div>
    {scroll && (
        <IconButton
          href="#scrollPage"
          sx={{
            backgroundColor:'white',
            color:'black',
            position: "fixed",
            top: "80%",
            left: "95%",
            transition: "0.5s",
            border:'1px solid black',
            scrollBehavior:'smooth'
          }}
          variant="contained"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
  </div>
);
}
