import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FiMessageSquare } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RassrochkaPage from "../../SalePages/PurchasePage/TermPayment";
import CardActions from "@mui/material/CardActions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const ShopCard = ({
  name1,
  img1,
  title1,
  sharxi,
  birinchinarxi,
  narxi,
  kreditnarxi,
  chegirma,
  yangi,
  clickbasket,
  clickfavorites,
  clickproduct,
  clickpayments,
  productdata,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "2%",
          p: 1,
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {chegirma == "chegirma" && (
            <Typography
              sx={{
                textAlign: "center",
                background: "#FF9800",
                borderRadius: "5px",
                p: "2px 7px",
                color: "white",
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              {chegirma}
            </Typography>
          )}
          {yangi == "yangi" && (
            <Typography
              sx={{
                textAlign: "center",
                background: "red",
                borderRadius: "5px",
                p: "2px 10px",
                color: "white",
                textTransform: "uppercase",
                fontSize: "11px",
                mt: "2px",
                width: "60%",
              }}
            >
              {yangi}
            </Typography>
          )}
        </Box>
        <div style={{ ml: "auto" }}>
          <Box
            onClick={clickbasket}
            sx={{
              backgroundColor: "#008DFF",
              borderRadius: "10px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiShoppingCart
              fontSize="20px"
              style={{ padding: "5px", color: "white" }}
            />
          </Box>
          <Box
            sx={{
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{ display: "flex", alignItems: "center" }}
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color="error" />}
              onClick={clickfavorites}
            />
          </Box>
        </div>
      </Box>
      {name1 && (
        <Typography
          sx={{
            color: "gray",
            fontWeight: "550",
            p: "7px",
            mt: "1%",
            ml: "1%",
          }}
        >
          {name1}
        </Typography>
      )}
      <CardMedia
        onClick={clickproduct}
        component="img"
        sx={{ width: "60%", ml: "auto", mr: "auto", mt: 2, cursor: "pointer" }}
        image={img1}
        alt="green iguana"
      />
      <CardContent
        sx={{
          height: { xs: "200px", sm: "120px", md: "130px", lg: "120px" },
        }}
      >
        <Box sx={{ height: { xs: "70px", sm: "40px" } }}>
          <Typography
            sx={{
              fontWeight: 550,
              ":hover": { color: "#008DFF" },
              fontSize: "12px",
            }}
          >
            {title1}
          </Typography>
        </Box>
        <div>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              columnGap: 2,
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
              <FiMessageSquare />
              {sharxi} ta sharx
            </Box>
          </Box>

          <Box sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: "#AF5679",
                textDecoration: "line-through",
                display: "block",
              }}
            >
              {birinchinarxi > "0" && `${birinchinarxi.toLocaleString()} so'm`}
            </Typography>
            <Typography sx={{ fontWeight: "550" }}>{narxi.toLocaleString()} so'm</Typography>
            <Typography variant="body2" sx={{ fontWeight: "550" }}>
              {kreditnarxi.toLocaleString()} so'm/12oy
            </Typography>
          </Box>
        </div>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "flex", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            m: "0px 6px",
            columnGap: 1,
            mb: 1,
          }}
        >
          <RassrochkaPage
            productdata={productdata}
            variant="contained"
            sx={{
              textTransform: "unset",
              backgroundColor: "#00CD98",
              fontSize: { xs: "11px", sm: "11px", md: "12px" },
              width: { xs: "100%", sm: "85px", md: "70px", lg: "100%" },
              height: "35px",
              p: "7px",
              borderRadius: "8px",
            }}
          >
            Rassrochka
          </RassrochkaPage>
          <Button
            onClick={clickpayments}
            variant="contained"
            sx={{
              textTransform: "unset",
              backgroundColor: "#008DFF",
              fontSize: { xs: "11px", sm: "11px", md: "12px" },
              height: "35px",
              width: { xs: "100%", sm: "100px", md: "100px", lg: "100%" },
              borderRadius: "8px",
              p: "7px",
              mt: { xs: 1, sm: "0px" },
            }}
          >
            Bir klikda olish
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};
export default ShopCard;
