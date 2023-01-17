import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { adminNavData } from "../navData";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoImg from '../../../assets/download.png';
import { useDispatch } from "react-redux";
import { removeToken } from '../../../redux/auth';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(removeToken());
    window.location.reload(false);
  };
  const settings = [
    {id:3, name:'Sotilgan maxsulotlar', link:'/productssold'},
    {id:1, name:'Glavni Banner', link: '/glavnibanner'},
    {id:2, name:'Chegirma Banner', link:'/chegirmabanner'},
    ];

  return (
    <AppBar position="static" sx={{ background: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            href="/"
            size="small"
            color="inherit"
            sx={{
              display: { xs: "none", md: "flex" },
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                // display: { xs: "block", md: "block" },
              }}
            >
              {adminNavData.map((page, id) => (
                <MenuItem
                  key={id}
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to={page.link}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            href="/"
            size="small"
            color="inherit"
            sx={{
              ml: { xs: "auto", sm: "0px" },
              width: { xs: "100px", md: "134px" },
              ":hover": { background: "none" },
              display: { xs: "flex", md: "none" },
            }}
          >
            <img
              width="100%"
              src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg"
              alt="logo"
            />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, columnGap:1, ml:4}}>
            {adminNavData.map((val, id) => (
              <Button
                key={id}
                component={NavLink}
                to={val.link}
                sx={{
                  textTransform: "unset",
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "black",
                }}
              >
                {val.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon color="primary"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, id) => (
                <MenuItem key={id} component={NavLink} to={setting.link}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogOut}>
                  <Typography textAlign="center">Chiqish</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

