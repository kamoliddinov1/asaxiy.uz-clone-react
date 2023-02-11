import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Axios from "../../../services/home";
import GenericCard from "../GenericCard";
import { addToBasket } from '../../../redux/cartSlice';
import { addToFavorites } from '../../../redux/favoritesSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GenericScelecton from "../../Generic/Sceleton";

const HomeCard = () => {
  const [homeData, setHomeData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await Axios.getAll().then((res) => setHomeData(res));
    };
    fetchData();
  }, []);

  const handleEdit = (row, link) => {
    const product = homeData.find((item) => item.id === row);
    product.quantity = 1;
    navigate(link, { state: { product } });
  };

  return (
    <Box sx={{ width: "100%", mt: 3, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography color="gray" sx={{ fontWeight: "550" }}>
          Siz uchun tanladik
        </Typography>
      </Box>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{ mt: 3 }}
      >
        {homeData.length > 0 ?
          <>
            {homeData?.map((ele, id) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={id}>
                <GenericCard
                  img1={ele?.img}
                  title1={ele?.name}
                  sharxi={ele?.comment}
                  birinchinarxi={ele?.birinchiNarxi}
                  narxi={ele?.narxi}
                  kreditnarxi={ele?.kreditNarxi}
                  clickbasket={() => dispatch(addToBasket(ele))}
                  clickfavorites={() => dispatch(addToFavorites(ele))}
                  clickproduct={() => handleEdit(ele?.id, "/product")}
                  clickpayments={() => handleEdit(ele?.id, "/order")}
                  productdata={ele}
                />
              </Grid>
            ))}
          </>
          :
          <>
            {Array.from(new Array(12)).map(() => (
              <Grid item xs={6} sm={4} md={4} lg={3}>
                <GenericScelecton />
              </Grid>
            ))}
          </>
        }
      </Grid>
    </Box >
  );
};
export default HomeCard;
