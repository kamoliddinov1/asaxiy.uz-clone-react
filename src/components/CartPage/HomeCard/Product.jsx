import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import GenericCard from "../GenericCard";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../../redux/cartSlice';
import { addToFavorites } from '../../../redux/favoritesSlice';

const HomeProduct = () => {
  const dispatch = useDispatch();
  const [bestProduct, setBestProduct] = useState([]);
  const [productoftheweek, setProductoftheweek] = useState([]);
  const [cheaper, setCheaper] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/bestProduct")
      .then((res) => setBestProduct(res.data));
    axios
      .get("http://localhost:8080/productoftheweek")
      .then((res) => setProductoftheweek(res.data));
    axios
      .get("http://localhost:8080/bestCheaper")
      .then((res) => setCheaper(res.data));
  }, []);

  return (
    <div>
      <Box>
        {bestProduct.map((val, id) => (
          <Box
          key={id}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              mt: 4,
              display: { xs: "none", md: "block" },
            }}
          >
            <GenericCard
              name1="Hafta tovari"
              img1={val.img}
              title1={val.name}
              sharxi={val.comment}
              birinchinarxi={val.birinchiNarxi}
              narxi={val.narxi}
              kreditnarxi={val.kreditNarxi}
              chegirma={val.category}
              yangi={val.category2}
              clickbasket={() => dispatch(addToBasket(val))}
              clickfavorites={() => dispatch(addToFavorites(val))}
            />
          </Box>
        ))}
      </Box>

      <Box>
        {productoftheweek.map((val, id) => (
          <Box
          key={id}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              mt: 4,
              display: { xs: "none", md: "block" },
            }}
          >
            <GenericCard
              name1="Eng yaxshi maxsulot"
              img1={val.img}
              title1={val.name}
              sharxi={val.comment}
              birinchinarxi={val.birinchiNarxi}
              narxi={val.narxi}
              kreditnarxi={val.kreditNarxi}
              chegirma={val.category}
              yangi={val.category2}
              clickbasket={() => dispatch(addToBasket(val))}
              clickfavorites={() => dispatch(addToFavorites(val))}
            />
          </Box>
        ))}
      </Box>

      <Box>
        {cheaper.map((val, id) => (
          <Box
          key={id}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              mt: 4,
              display: { xs: "none", md: "block" },
            }}
          >
            <GenericCard
              name1="Yanada arzon"
              img1={val.img}
              title1={val.name}
              sharxi={val.comment}
              birinchinarxi={val.birinchiNarxi}
              narxi={val.narxi}
              kreditnarxi={val.kreditNarxi}
              chegirma={val.category}
              yangi={val.category2}
              clickbasket={() => dispatch(addToBasket(val))}
              clickfavorites={() => dispatch(addToFavorites(val))}
            />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default HomeProduct;
