import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import { ContainerGrid } from "./style.js";
import Badge from "@mui/material/Badge";
import {
  removeBasket,
  incrementQuantity,
  decrementQuantity,
} from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, getTotalKredit } from "../../../helpers/BasketTotal";
import ButtonRassrochkaPage from "../../SalePages/PurchasePage/TermPayment";
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [exchange, setExchange] = useState(true);

  const basketData = useSelector((state) => state.basket.cartBasket);
  const sumBasket = getTotalPrice(basketData);
  const sumKredit = getTotalKredit(basketData);

  const Miqdorlari = (
    <div>
      {basketData.length > 0 && (
        <Box
          sx={{
            backgroundColor: "white",
            p: "5%",
            textAlign: "center",
            borderRadius: "15px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          {exchange ? (
            <div>
              <Typography sx={{ color: "#1395FF", mt: 2, fontWeight: "550" }}>
                Savatdagi mahsulotlar soni: {basketData?.length}
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: "550" }}>
                Jami miqdor:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "550", mt: 2 }}>
                {sumBasket.totalPrice} so'm
              </Typography>
              <Divider sx={{ mt: 2 }} />
              <Button
               onClick={() => navigate("/order")}
                variant="contained"
                color="warning"
                sx={{
                  mt: 2,
                  width: "90%",
                  height: "42px",
                  borderRadius: "8px",
                }}
              >
                Buyurtma
              </Button>
            </div>
          ) : (
            <div>
              <Typography sx={{ color: "#1395FF", mt: 2, fontWeight: "600" }}>
                To'lov 12 oyga
              </Typography>
              <Typography sx={{ mt: 2, fontWeight: "500" }}>
                Oylik to'lov
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "500", mt: 2 }}>
                {sumKredit.totalPrice} so'm / 12 oy
              </Typography>
              <Divider sx={{ mt: 2 }} />
              <ButtonRassrochkaPage
                productdata={{narxi : sumKredit.totalPrice}}
                variant="contained"
                color="warning"
                sx={{
                  mt: 2,
                  width: "90%",
                  height: "42px",
                  borderRadius: "8px",
                }}
              >
                Bo'lib tolash tartibi
              </ButtonRassrochkaPage>
            </div>
          )}
        </Box>
      )}
    </div>
  );

  return (
    <div>
      {basketData.length ? (
        <Box sx={{ width: "100%", mt: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "550" }}>
            Savatcha
          </Typography>
          <Box
            sx={{ display: { xs: "block", sm: "flex" }, mt: 2, columnGap: 4 }}
          >
            <Button
              variant={exchange && "contained"}
              sx={{
                textTransform: "unset",
                color: exchange ? "white" : "black",
                fontSize: "14px",
                borderRadius: "8px",
                height: "35px",
              }}
              onClick={() => setExchange(true)}
            >
              <Badge color="secondary" badgeContent={basketData.length || "0"}>
                Standart xarid
              </Badge>
            </Button>
            <Button
              variant={!exchange && "contained"}
              sx={{
                textTransform: "unset",
                color: !exchange ? "white" : "black",
                fontSize: "14px",
                borderRadius: "8px",
                height: "35px",
              }}
              onClick={() => setExchange(false)}
            >
              <Badge color="secondary" badgeContent={basketData.length || "0"}>
                Tovarlarni bo'lib to'lash
              </Badge>
            </Button>
          </Box>

          <ContainerGrid>
            <Box>
              {basketData?.map((ele, id) => (
                <Grid
                  key={id}
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 1, md: 0 }}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    borderRadius: "15px",
                    mb: 4,
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    lg={7}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        m: 3,
                        width: "20%",
                      }}
                    >
                      <img
                        width="100%"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
                        src={ele.img}
                        alt="sevimlilar"
                      />
                    </Box>
                    <Box m={1}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          ":hover": { color: "#6846FF" },
                        }}
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
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ButtonGroup variant="outlined" sx={{ height: "30px" }}>
                      <Button
                        variant="contained"
                        onClick={() => dispatch(decrementQuantity(ele.id))}
                      >
                        -
                      </Button>
                      <Button sx={{ p: "0px 30px" }}>{ele.quantity}</Button>
                      <Button
                        variant="contained"
                        onClick={() => dispatch(incrementQuantity(ele.id))}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    lg={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ textAlign: "start" }}>
                      {exchange ? (
                        <div>
                          <Typography
                            sx={{ fontSize: "12px", textAlign: "center" }}
                          >
                            {ele.birinchiNarxi > "1" &&
                              ele.birinchiNarxi + " " + "so'm"}
                          </Typography>
                          <Typography
                            sx={{ fontSize: "12px", textAlign: "center" }}
                          >
                            {ele.narxi} so'm
                          </Typography>
                        </div>
                      ) : (
                        <div>
                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontSize: "11px",
                              textDecoration: "line-through",
                              color: "#AF5679",
                            }}
                          >
                            {ele.birinchiNarxi > "1" &&
                              ele.birinchiNarxi + " " + "so'm"}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              textAlign: "start",
                              fontWeight: "600",
                            }}
                          >
                            {ele.narxi} so'm
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              textAlign: "start",
                              fontWeight: "600",
                              color: "#008DFF",
                              mt: 1,
                            }}
                          >
                            {ele.kreditNarxi} so'm / 12 oy
                          </Typography>
                        </div>
                      )}

                      <Button
                        onClick={() => dispatch(removeBasket(ele.id))}
                        variant="text"
                        color="warning"
                        sx={{
                          fontSize: "14px",
                          textTransform: "unset",
                          mr: "auto",
                          mt: 1,
                        }}
                      >
                        <DeleteForeverIcon /> o'chirish
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Box>
            {Miqdorlari}
          </ContainerGrid>
        </Box>
      ) : (
        <Typography sx={{ mt: 5, fontSize: "20px" }}>
          Savatcha bo'sh...
        </Typography>
      )}
    </div>
  );
};
export default Basket;
