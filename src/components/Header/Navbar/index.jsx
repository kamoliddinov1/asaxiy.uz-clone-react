import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Nav2 from "./Item";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Til } from "./Select";
import SelectTil from "./Select";
import ShaxsiyKabinet from "../../PersonalCabinet";
import { useNavigate } from "react-router-dom";
import { navData } from "../navData";
import { useSelector } from "react-redux";
import BasketCart from "../../SalePages/Basket/basket";
import SearchBar from "../SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const favoritesData = useSelector(
    (state) => state.favorites.cartfavorites.length
  );
  /////////// shaxsiy kabinert modal korinishida ochish uchun
  const [open, setOpen] = React.useState(false);
  const handleTest = () => {
    setOpen(open == false ? true : false);
  };

  // mobill uchun
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ p: 2, width: "100px" }}>
        <img
          width="100px"
          src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
          alt="logo"
        />
      </Box>
      <List>
        {navData.map((text, id) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => navigate(text.link)}>
              <ListItemIcon sx={{ fontSize: "22px", color: "black" }}>
                {text.svg ? (
                  text.icon
                ) : (
                  <img width="28px" height="22px" src={text.icon} alt="#" />
                )}
              </ListItemIcon>
              <ListItemText sx={{ fontWeight: "bold" }} primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Til />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #E6E8EE",
          height: { xs: "59px", sm: "74px" },
          display: "flex",
          alignItems: "center",
          // boxSizing:'border-box'
        }}
      >
        <Toolbar sx={{ width: "90%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", sm: "25%" },
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                onClick={toggleDrawer("left", true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon color="primary" />
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </Box>

            <Button
              href="/"
              size="small"
              color="inherit"
              sx={{
                ml: { xs: "auto", sm: "0px" },
                width: { xs: "100px", md: "134px" },
                ":hover": { background: "none" },
              }}
            >
              <img
                width="100%"
                src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
                alt="logo"
              />
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "100%",
            }}
          >
            <SearchBar />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", lg: "flex", md: "flex" },
              alignItems: "center",
              color: "black",
              columnGap: 0,
            }}
          >
            <IconButton
              sx={{ m: "0px 12px", ":hover": { color: "#008DFF" } }}
              onClick={() => navigate("/payment")}
              // size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Box>
                <Badge>
                  <img
                    style={{ width: "32px", height: "24px" }}
                    src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                    alt="#"
                  />
                </Badge>
                <Typography sx={{ fontFamily: "unset", fontSize: "12px" }}>
                  Tolov
                </Typography>
              </Box>
            </IconButton>

            <IconButton
              sx={{ m: "0px 12px", ":hover": { color: "#008DFF" } }}
              onClick={() => navigate("/trek")}
              // size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Box>
                <Badge>
                  <img
                    style={{ width: "32px", height: "24px" }}
                    src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                    alt="#"
                  />
                </Badge>
                <Typography sx={{ fontFamily: "unset", fontSize: "12px" }}>
                  Trek
                </Typography>
              </Box>
            </IconButton>

            <SelectTil />
            <BasketCart />
            <IconButton
              sx={{ ":hover": { color: "#008DFF" } }}
              onClick={() => navigate("/favourites")}
              size="large"
              aria-label="show 12 new notifications"
              color="inherit"
            >
              <Box>
                <Badge badgeContent={favoritesData || "0"} color="info">
                  <img
                    style={{ width: "32px", height: "24px" }}
                    src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                    alt="#"
                  />
                </Badge>
                <Typography sx={{ fontFamily: "unset", fontSize: "12px" }}>
                  Sevimlilar
                </Typography>
              </Box>
            </IconButton>

            <ShaxsiyKabinet>
              <IconButton
                sx={{ ":hover": { color: "#008DFF" } }}
                onClick={handleTest}
                size="large"
                aria-label="show 12 new notifications"
                color="inherit"
              >
                <Box>
                  <Badge color="info">
                    <img
                      style={{ width: "32px", height: "24px" }}
                      src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                      alt="#"
                    />
                  </Badge>
                  <Typography sx={{ fontFamily: "unset", fontSize: "12px" }}>
                    Кабинет
                  </Typography>
                </Box>
              </IconButton>
            </ShaxsiyKabinet>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "95%",
          height: "32px",
          mt: 1,
          ml: "auto",
          mr: "auto",
        }}
      >
        <SearchBar />
      </Box>
      <Nav2 />
    </Box>
  );
};
export default Navbar;
