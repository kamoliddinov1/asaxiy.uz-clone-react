import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import SelectButton from "../../Generic/SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { removefavorites } from "../../../redux/favoritesSlice";
import { addToBasket } from "../../../redux/cartSlice";

const Favorites = () => {
  const Raqam = [12, 24, 48, 60];
  const Saralashdata = [
    "Saralash",
    "Yangi kelganlar",
    "Avval arzonlari",
    "Avval qimmatlari",
    "Reyting (quisidan boshlab)",
    "Reyting (yuqorisidan boshlab)",
  ];
  const [soni, setSoni] = useState(12);
  const [saralash, setSaralash] = useState("Saralash");

  const dispatch = useDispatch();
  
  const favoritesData = useSelector((state) => state.favorites.cartfavorites);

  return (
    <Box sx={{ width: {md:'100%', lg:"90%"}, m: "2%", ml: "auto", mr: "auto" }}>
      <Box sx={{ mt: 4,  display: { xs:'block', sm:"flex"}, justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "550" }}>
          Sevimlilar
        </Typography>
        <Box sx={{  display: "flex", columnGap: 1, ml: "auto" }}>
          <SelectButton
            options={Raqam}
            selectedindex={soni}
            setselectedindex={setSoni}
          />
          <SelectButton
            options={Saralashdata}
            selectedindex={saralash}
            setselectedindex={setSaralash}
          />
        </Box>
      </Box>
      {favoritesData?.map((ele, id) => (
        <Grid
          key={id}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 0 }}
          sx={{
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            mt: 4,
            borderRadius:'15px'
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            sx={{ display: "flex", justifyContent:'center', columnGap:2 }}
          >
            <Box
              sx={{
                m: 1,
                width: { xs: "80%", sm: "20%", lg: "110px" },
                display:'flex',
                justifyContent:'center',
                ml:'auto',
                mr:'auto'
              }}
            >
              <img
                width="100%"
                style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 18px" }}
                src={ele.img}
                alt="sevimlilar"
              />
            </Box>
            <Box m={1} sx={{ width: "75%" }}>
              <Typography
                sx={{ fontWeight: "bold", ":hover": { color: "#6846FF" } }}
              >
                {ele.name}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, fontSize: "12px", textTransform: "unset" }}
              >
                Xiaomi
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{ display: "flex", justifyContent: { xs:'space-between', md:'center', lg:"center"}, alignItems:{xs:'center', md:'start'} }}
          >
            <Typography sx={{fontWeight:'600', display:{xs:'flex', md:'none'}}}>Price:</Typography>
            <Box sx={{ textAlign: "start", m: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>
                {ele.narxi} so'm
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                {ele.kreditNarxi} so'm / 12 oy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Box width="98%" sx={{ mt: 1 }}>
              <Button
                onClick={() =>  dispatch(addToBasket(ele))}
                fullWidth
                variant="contained"
                sx={{ fontSize: "12px", textTransform: "unset" }}
              >
                Savatchaga qoshish
              </Button>
              <Button
                onClick={() => dispatch(removefavorites(ele.id))}
                fullWidth
                color="warning"
                variant="contained"
                sx={{ mt: 2, fontSize: "12px", textTransform: "unset" }}
              >
                O'chirish
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
export default Favorites;
