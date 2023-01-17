import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FiMessageSquare } from "react-icons/fi";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsTwitter, BsWhatsapp, BsBookHalf } from "react-icons/bs";
import { TbBasket } from "react-icons/tb";
import Avatar from "@mui/material/Avatar";
import { IoMdBook } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import Tavsiya from "./Tavsiya";
import { useLocation, useNavigate } from "react-router-dom";
import TermPurChasePage2 from "../PurchasePage/TermPayment";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { addToBasket } from "../../../redux/cartSlice";
import { addToFavorites } from "../../../redux/favoritesSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const tarmoqlar = [
  {
    id: 1,
    col: "#3B5998",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/dialog/share?app_id=296649824842615&u=https%3A%2F%2Fasaxiy.uz%2Fproduct%2Fvikas-svarup-harobadan-chikkan-millioner&display=page&href=https%3A%2F%2Fasaxiy.uz%2Fproduct%2Fvikas-svarup-harobadan-chikkan-millioner",
  },
  {
    id: 2,
    col: "#0088CC",
    icon: <FaTelegramPlane />,
    link: "https://t.me/share/url?url=https%3A%2F%2Fasaxiy.uz%2Fproduct%2Fvikas-svarup-harobadan-chikkan-millioner&text=Vikas+Svarup%3A+Xarobadan+chiqqan+millioner",
  },
  {
    id: 3,
    col: "#36D8FF",
    icon: <BsTwitter />,
    link: "https://twitter.com/intent/tweet?text=Vikas+Svarup%3A+Xarobadan+chiqqan+millioner&url=https%3A%2F%2Fasaxiy.uz%2Fproduct%2Fvikas-svarup-harobadan-chikkan-millioner&hashtags=asaxiyuz",
  },
  {
    id: 4,
    col: "#36D8FF",
    icon: <BsWhatsapp />,
    link: "https://api.whatsapp.com/send?text=Vikas%20Svarup:%20Xarobadan%20chiqqan%20millioner",
  },
];

const data = [
  { id: 1, title: "O'qidim", icon: <BsBookHalf />, soni: "0" },
  { id: 2, title: "O'qiyapman", icon: <IoMdBook />, soni: "5" },
  { id: 3, title: "o'qimoqchiman", icon: <MdMenuBook />, soni: "3" },
];

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          md={1}
          sx={{ display: { xs: "none", sm: "none", md: "inline" } }}
        >
          <Paper
            sx={{
              width: "90%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <img
              style={{ width: "70%", margin: "10px" }}
              src={product?.img}
              alt="#"
            />
          </Paper>
          <Box>
            <img src="" alt="" />
          </Box>
          <Box>
            <img src="" alt="" />
          </Box>
          <Box>
            <img src="" alt="" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              background: "white",
              borderRadius: "15px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              p: "10% 15%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#008DFF",
                borderRadius: "10px",
                width: "37px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: "4%",
                left: "auto",
                right: "3%",
              }}
            >
              <Box
                sx={{
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  sx={{ display: "flex", alignItems: "center", color: "white" }}
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
                  onClick={() => dispatch(addToFavorites(product))}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img style={{ width: "100%" }} src={product?.img} alt="maximg" />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "18px", fontFamily: "unset" }}
          >
            {product?.name}
          </Typography>
          <Typography
            sx={{ mt: 2, textDecoration: "line-through", color: "#AF5679" }}
          >
            {product?.birinchiNarxi} so'm
          </Typography>
          <Typography
            sx={{ fontSize: "20px", color: "#D9663B", fontWeight: "550" }}
          >
            {product?.narxi} so'm
          </Typography>
          <Typography>{product?.kreditNarxi} so'm / 12 oy</Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              columnGap: 2,
              mt: "auto",
            }}
          >
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={5}
                precision={1}
                sx={{ color: "#008DFF", fontSize: "18px" }}
              />
            </Stack>
            <Box
              sx={{
                color: "gray",
                display: "flex",
                alignItems: "center",
                columnGap: 0.5,
                fontSize: "12px",
              }}
            >
              {" "}
              <FiMessageSquare />
              {product?.comment} ta sharx
            </Box>
          </Box>

          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography sx={{ fontWeight: "600", fontFamily: "unset" }}>
              Model:
            </Typography>
            <Typography sx={{ fontWeight: "600", fontFamily: "unset", ml: 2 }}>
              {product?.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mt: 2, alignItems: "center" }}>
            <Typography sx={{ fontWeight: "600", fontFamily: "unset" }}>
              Holati:
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                ml: 2,
                color: "#34D374",
                fontSize: "16px",
              }}
            >
              ● Sotuvda bor
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", mt: 4, alignItems: "center", columnGap: 1 }}
          >
            <Typography sx={{ fontWeight: "600", fontFamily: "unset" }}>
              Ulashish:
            </Typography>
            {tarmoqlar.map((ele, id) => (
              <Avatar
                key={id}
                sx={{ bgcolor: `${ele.col}`, width: 35, height: 35 }}
              >
                {ele.icon}
              </Avatar>
            ))}
          </Box>

          {/* <Box sx={{ mt: 2 }}>
            {data.map((ele, id) => (
              <Box
                key={id}
                sx={{
                  width: "45%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  textTransform: "unset",
                  color: "black",
                  mt: 1,
                }}
              >
                {ele.icon}
                <Typography sx={{ fontWeight: "600", fontFamily: "unset" }}>
                  {ele.title}
                </Typography>
                <Typography
                  sx={{
                    ml: "auto",
                    mr: "0px",
                    backgroundColor: "#C3E2FD",
                    p: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {ele.soni}
                </Typography>
              </Box>
            ))}
          </Box> */}

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              columnGap: 1,
              mt: 2,
              width: "100%",
            }}
          >
            <TermPurChasePage2
              productdata={product}
              variant="contained"
              color="primary"
              sx={{
                textTransform: "unset",
                height: { sm: "65px", md: "45px" },
                borderRadius: "8px",
                p: "7px",
                width: { xs: "100%", sm: "100%" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              Muddatli tolov
            </TermPurChasePage2>
            <Button
              onClick={() => dispatch(addToBasket(product))}
              variant="contained"
              color="warning"
              sx={{
                textTransform: "unset",
                columnGap: 1,
                height: { sm: "65px", md: "45px" },
                borderRadius: "8px",
                p: "7px",
                width: { xs: "100%", sm: "40%" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              <TbBasket style={{ fontSize: "30px" }} /> Savatchaga qoshish
            </Button>
            <Button
              onClick={() => navigate("/order", { state: { product } })}
              variant="outlined"
              color="warning"
              sx={{
                textTransform: "unset",
                height: { sm: "65px", md: "45px" },
                borderRadius: "8px",
                p: "7px",
                width: { xs: "100%", sm: "30%" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              Bir klikda olish
            </Button>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { xs: "none", sm: "none", md: "inline" } }}
        >
          <Tavsiya />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Product;
