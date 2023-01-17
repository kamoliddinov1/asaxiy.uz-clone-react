import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Services from "../../../services/productsSold";
import DeleteModal from '../../Modal';


const TypographyItem = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '10px', sm: "15px" },
  fontWeight: "500",
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "8px",
}));
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Services.getAll().then((res) => {
      setData(res);
    });
  }, [loading]);

  function handleDelete(id) {
    Services.delete(id).then();
    setLoading(!loading);
  }

  return (
    <div>
      {data[0] ? (
        <div>
          {data.map((ele, id) => (
            <Paper sx={{ mt: 3, mb: 3, p: 2 }} key={id}>
              <Box
                sx={{
                  display: { xs: 'inline-block', sm: "flex" },
                  justifyContent: "space-between",
                  columnGap: 3,
                }}
              >
                <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                  <BoxContainer>
                    <TypographyItem>Fio:</TypographyItem>
                    <TypographyItem>{ele.fio}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Telefon:</TypographyItem>
                    <TypographyItem>{ele.phone}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Viloyat:</TypographyItem>
                    <TypographyItem>{ele.province}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Shahar/Tuman:</TypographyItem>
                    <TypographyItem>{ele.city}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Aholi Punkiti:</TypographyItem>
                    <TypographyItem>{ele.residence}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Manzil:</TypographyItem>
                    <TypographyItem>{ele.address}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Ish joyi manzili:</TypographyItem>
                    <TypographyItem>{ele.workplace}</TypographyItem>
                  </BoxContainer>
                  <BoxContainer>
                    <TypographyItem>Qoshimcha:</TypographyItem>
                    <TypographyItem>{ele.addition}</TypographyItem>
                  </BoxContainer>
                </Box>

                <Box sx={{ width: { xs: "100%", sm: "50%" }, mt: { xs: 4, sm: 0 } }}>
                  <div
                    style={{
                      background: "white",
                      padding: "0px 20px",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontWeight: "600",
                          color: "#3BA7FF",
                          mb: 1,
                        }}
                      >
                        Sotib olongani mahsulotlar soni:{" "}
                        {ele.productData?.length}
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        Mahsulotlarning narxi
                      </Typography>
                      <Typography
                        sx={{ color: "#B1597C", textAlign: "center" }}
                      >
                        {ele.totalCost} so'm
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          height: ele.productData?.length >= 2 && "150px",
                          overflow: "scroll",
                        }}
                      >
                        {ele.productData?.map((val, id) => (
                          <Box
                            key={id}
                            sx={{
                              display: { xs: "block", lg: "flex" },
                              columnGap: 2,
                              width: "100%",
                              mt: 4,
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              component="img"
                              sx={{ width: "100px" }}
                              src={val.img}
                              alt="#"
                            />

                            <div style={{ textAlign: "center" }}>
                              <Typography
                                sx={{ fontSize: "14px", fontWeight: "500" }}
                              >
                                {val.name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  mt: 1,
                                }}
                              >
                                {val.quantity} Dona
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  fontWeight: "600",
                                  color: "#a817e2",
                                  mt: 2,
                                }}
                              >
                                {val.narxi} so'm
                              </Typography>
                            </div>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </div>
                </Box>
              </Box>
              <DeleteModal fullWidth
                variant="contained"
                color="warning"
                sx={{ mt: 2 }} ochirish={() => handleDelete(ele.id)}>O'chirish</DeleteModal>
            </Paper>
          ))}
        </div>
      ) : (
        <>
          <Typography sx={{ color: 'red' }}>Sotilgan maxsulotlar mavjud emas...</Typography>
        </>
      )}
    </div>
  );
};
