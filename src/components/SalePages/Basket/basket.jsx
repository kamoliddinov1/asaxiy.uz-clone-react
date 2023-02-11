import React from "react";
import { Box, Paper, Typography, IconButton, Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { removeBasket } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, getTotalKredit } from "../../../helpers/BasketTotal";
import { useNavigate } from "react-router-dom";

const Menubasket = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = () => {
    navigate("/basket");
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basketData = useSelector((state) => state.basket.cartBasket);
  const sumBasket = getTotalPrice(basketData);
  const sumKerdit = getTotalKredit(basketData);

  const handleEdit = (row) => {
    const product = basketData.find((item) => item.id === row);
    navigate("/maxsulot", { state: { product } });
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ ":hover": { color: "#008DFF" } }}
        size="large"
        aria-label="show 12 new notifications"
        color="inherit"
      >
        <Box>
          <Badge badgeContent={basketData.length || "0"} color="info">
            <img
              style={{ width: "32px", height: "24px" }}
              src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
              alt="#"
            />
          </Badge>
          <Typography sx={{ fontFamily: "unset", fontSize: "12px" }}>
            Savatcha
          </Typography>
        </Box>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ p: 1 }}>
          {basketData?.slice(0, 3)?.map((val, id) => (
            <Paper
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 1,
                borderRadius: "12px",
                p: 1,
                mb: 1,
              }}
            >
              <img width="40px" src={val.img} alt="#" />
              <Typography
                onClick={() => handleEdit(val?.id)}
                sx={{ fontSize: "12px", width: "190px", fontWeight: "600", ":hover":{color:'blue'} }}
              >
                {val.name} ({sumBasket.totalQuantity}x)
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                  {val.narxi.toLocaleString()} so'm
                </Typography>
                <CloseIcon
                  fontSize="12px"
                  onClick={() => dispatch(removeBasket(val.id))}
                />
              </Box>
            </Paper>
          ))}
        </Box>
        <div style={{ padding: "10px", backgroundColor: "#F1F9FF" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "gray" }}>
              Jami:
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
              {sumKerdit.totalPrice.toLocaleString()} so'm
            </Typography>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={() => navigate("/order", { state: { basketData } },setAnchorEl(null))}
              sx={{
                width: "100%",
                borderRadius: "12px",
                textTransform: "full-size-kana",
                height: "42px",
              }}
            >
              Sotib olish
            </Button>
            <Button
              onClick={handleNavigate}
              sx={{
                mt: 2,
                width: "100%",
                borderRadius: "12px",
                textTransform: "full-size-kana",
                backgroundColor: "white",
                color: "black",
                height: "42px",
              }}
            >
              Savatchaga o'kazish
            </Button>
          </Box>
        </div>
      </Menu>
    </div>
  );
};
export default Menubasket;
