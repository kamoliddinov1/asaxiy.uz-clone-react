import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";

import { CgHome } from "react-icons/cg";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import ShaxsiyKabinet from "../../PersonalCabinet";
import { NavLink } from "react-router-dom";
import Katalog from "../../AllParts/MobileDirectory";

const data1 = [
  { title: "Asosiy", icon: <CgHome />, link: "/home" },
  { title: "dialog", icon: <GrAppsRounded />, link: "" },

  {
    title: "Savat",
    icon: <HiOutlineShoppingCart />,
    link: "/basket",
  },
  {
    title: "Shaxsiy kabinet",
    icon: <HiOutlineUser />,
    link: "",
    ShaxsiyKabinet: true,
  },
];

const MyAppBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", top: "auto", bottom: "0px" }}
      >
        <Toolbar variant="dense">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <IconButton
                LinkComponent={NavLink}
                to="/home"
                sx={{ m: "0px 10px", ":hover": { color: "#008DFF" } }}
                size="small"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Box>
                  <Badge sx={{ color: "black" }}>
                    <CgHome />
                  </Badge>
                  <Typography
                    variant="body2"
                    sx={{ color: "black", fontSize: "8px" }}
                  >
                    Bosh sahifa
                  </Typography>
                </Box>
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <Katalog />
            </Grid>
            <Grid item xs={3}>
              <IconButton
                LinkComponent={NavLink}
                to="/basket"
                sx={{ m: "0px 10px", ":hover": { color: "#008DFF" } }}
                size="small"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Box>
                  <Badge sx={{ color: "black" }}>
                    <HiOutlineShoppingCart />
                  </Badge>
                  <Typography
                    variant="body2"
                    sx={{ color: "black", fontSize: "8px" }}
                  >
                    Savatcha
                  </Typography>
                </Box>
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <ShaxsiyKabinet>
                <IconButton
                  LinkComponent={NavLink}
                  sx={{ m: "0px 10px", ":hover": { color: "#008DFF" } }}
                  size="small"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Box>
                    <Badge sx={{ color: "black" }}>
                      <HiOutlineUser />
                    </Badge>
                    <Typography
                      variant="body2"
                      sx={{ color: "black", fontSize: "8px" }}
                    >
                      Shaxsiy kabinet
                    </Typography>
                  </Box>
                </IconButton>
              </ShaxsiyKabinet>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MyAppBar;
