import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { PatternFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import ReCaptcha from "../../ReCaptcha";
import Rasim from "../../../assets/tracking.svg";


const Trek = () => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 3,
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Box sx={{ p: "2%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 7 }}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box sx={{p: 2}}>
            <Typography sx={{ fontWeight: "550", fontSize:{xs:'24px', sm:'40px'}, textAlign:{xs:'center', sm:"start"} }}>
              Buyurtma holati
            </Typography>
            <Typography color="GrayText" sx={{ mt: 4, fontWeight: "550" }}>
              Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma
              raqami sizning raqamingizga SMS-xabar shaklida yuborilgan
            </Typography>
            <Box>
              <FormControl sx={{ width: "90%", mt: 3, display: "block" }}>
                <Typography color="GrayText" sx={{ mt: 1, fontWeight: "550" }}>
                  Buyurtma raqami*
                </Typography>
                <InputBase
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  //   placeholder="Search Google Maps"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </FormControl>

              <FormControl sx={{ width: "90%", mt: 5, display: "block" }}>
                <Typography color="GrayText" sx={{ mt: 1, fontWeight: "550" }}>
                  Buyurtma berilgandagi telefon raqami *
                </Typography>
                <PatternFormat
                  control={<InputBase />}
                  style={{
                    padding: "5px",
                    fontSize: "15px",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    borderColor: "gray",
                    height: "22px",
                    width: "97%",
                  }}
                  //   value={formik.values.phone}
                  //   onChange={formik.handleChange}
                  // name="phone"
                  // id="phone"
                  format="+### (##) ###-##-##"
                  allowEmptyFormatting
                  mask="_"
                />
              </FormControl>
            </Box>
            <Box mt={4}>
              <ReCaptcha />
            </Box>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <Button variant="contained" sx={{ textTransform: "unset" }}>
                Korinish
              </Button>
            </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                width: "100%",
                top: "auto",
                bottom: "auto",
              }}
            >
              <img src={Rasim} alt="trek" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Trek;
