import React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { pagedata } from '../navData'

const NavItem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: { xs: "none", sm: "none", lg: "flex", md: "flex" },
        justifyContent:'center',
        alignItems:'center',
        width: "100%",
        height:'48px',
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent:'space-between',
          width:'91%'
        }}
      >
        {pagedata.map((ele, id) => (
          <NavLink
            key={id}
            to={ele.link}
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "550",
              fontSize: "15px",
            }}
          >
            {ele.title}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default NavItem;
