import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Axios from "../../../services/sportbuyum";
import GenericCard from "../GenericCard";
import MySelectButton from "../../Generic/SelectButton";
import { addToBasket } from '../../../redux/cartSlice';
import { addToFavorites } from '../../../redux/favoritesSlice';
import { useDispatch } from 'react-redux';
import { filterCard } from '../../../helpers/sortingFilter';
import { useNavigate } from "react-router-dom";

const SportsGoodsCard = () => {
  const [shopData, setShopData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.getAll().then((res) => {setShopData(res);});
  }, []);

  const mumarr = [12, 24, 48, 60];
  const sortingdata = [
    "Saralash",
    "Yangi kelganlar",
    "Avval arzonlari",
    "Avval qimmatlari",
    "Reyting (quisidan boshlab)",
    "Reyting (yuqorisidan boshlab)",
  ];
  const [numSlice, setNumSlice] = useState(12);
  const [sorting, setSorting] = useState("Saralash");

  const sum = 50000;
  const filterData = filterCard(shopData, sorting, sum);

  const handleEdit = (row, link) => {
    const product = shopData.find((item) => item.id === row);
    product.quantity = 1;
    navigate(link, { state: { product } });
  };

  return (
    <Box sx={{ width: "100%", mt: 3, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography color="gray" sx={{ fontWeight: "550" }}>
          Sport Buyumlari
        </Typography>
        <Box  sx={{display:'flex', columnGap:1, ml:'auto'}}>
        <MySelectButton
            options={mumarr}
            selectedindex={numSlice}
            setselectedindex={setNumSlice}
          />
          <MySelectButton
            options={sortingdata}
            selectedindex={sorting}
            setselectedindex={setSorting}
          />
        </Box>
      </Box>

      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{ mt: 1 }}
      >
        {filterData.slice(0, numSlice).map((ele, id) => (
          <Grid item xs={6} sm={4} md={4} lg={3} key={id}>
            <GenericCard
              img1={ele.img}
              title1={ele.name}
              sharxi={ele.comment}
              birinchinarxi={ele.birinchiNarxi}
              narxi={ele.narxi}
              kreditnarxi={ele.kreditNarxi}
              clickbasket={() =>  dispatch(addToBasket(ele))}
              clickfavorites={() => dispatch(addToFavorites(ele))}
              clickproduct={() => handleEdit(ele?.id, "/product")}
              clickpayments={() => handleEdit(ele?.id, "/order")}
              productdata={ele}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SportsGoodsCard;
