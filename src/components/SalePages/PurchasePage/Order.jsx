import React from "react";
import { Box, Grid, Button, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import { PatternFormat } from "react-number-format";
import { ContainerGrid } from "./style";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Badge from "@mui/material/Badge";
import YandexMaps from "./YandexMaps.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket, clearBasket } from "../../../redux/cartSlice";
import { getTotalPrice } from "../../../helpers/BasketTotal";
import { useLocation, useNavigate } from "react-router-dom";
import Services from "../../../services/productsSold";

const Purchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productData = [location.state?.product];
  const basketData2 = location.state?.basketData;
  const basketData = useSelector((state) => state.basket.cartBasket);
  let data = productData[0] ? productData : basketData;

  const sumBasket = getTotalPrice(data);
  const dispatch = useDispatch();

  ////////////////////// checkbox ///////////////////

  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState("naqd");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangePaymend = (event) => {
    setValue(event.target.value);
  };
  ///////////////////////////////////////////////////

  const [testPromo, setTestPromo] = React.useState(false);

  const productSum = (
    <div
      style={{
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        background: "white",
        padding: "30px",
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            color: "#3BA7FF",
            display: basketData2 ? "block" : "none",
            mb: 1,
          }}
        >
          Savatdagi mahsulotlar soni: {basketData2?.length}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Mahsulotlarning narxi
        </Typography>
        <Typography sx={{ color: "#B1597C", textAlign: "center" }}>
          {sumBasket?.totalPrice} so'm
        </Typography>
      </Box>
      <Box
        sx={{ height: basketData2?.length >= 2 && "320px", overflow: "scroll" }}
      >
        {data?.map((val, id) => (
          <Box
            key={id}
            sx={{
              display: { xs: "block", lg: "flex" },
              columnGap: 2,
              width: "100%",
              mt: 2,
            }}
          >
            <Paper
              sx={{
                width: "55px",
                height: "40px",
                p: "10px",
                textAlign: "center",
                borderRadius: "15px",
                mr: "auto",
                ml: "auto",
              }}
            >
              <Typography
                component="img"
                sx={{ width: "40px" }}
                src={val.img}
                alt="#"
              />
            </Paper>
            <div style={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                {val.name}
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: "500", mt: 1 }}>
                1 Dona
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                {val.narxi} so'm
              </Typography>
              <Button
                onClick={() => dispatch(removeBasket(val.id))}
                variant="text"
                color="warning"
                sx={{
                  display: basketData2?.length > 0 ? "flex" : "none",
                  fontSize: "13px",
                  textTransform: "unset",
                  mt: 1,
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <DeleteForeverIcon /> o'chirish
              </Button>
            </div>
          </Box>
        ))}
      </Box>
    </div>
  );

  const formData = {
    phone: "",
    fio: "",
    province: "",
    city: "",
    residence: "",
    address: "",
    workplace: "",
    addition: "",
    totalCost: sumBasket?.totalPrice, 
    productData: data,
  };

  const formik = useFormik({
    initialValues: formData,

    validationSchema: Yup.object({
      fio: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      province: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      city: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      residence: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      address: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      workplace: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
    }),

    onSubmit: (values) => {
      Services.create(values).then(() => {
        navigate("/");
      });

      alert(JSON.stringify(values, null, 2));
      dispatch(clearBasket());
    },
  });

  return (
    <ContainerGrid>
      <div
        style={{
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          background: "white",
          padding: "40px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Telefon{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>*</span>
                    </FormHelperText>
                    <PatternFormat
                      control={OutlinedInput}
                      style={{
                        fontSize: "12px",
                        border: "1px solid #C4C4C4",
                        height: "35px",
                        borderRadius: "10px",
                      }}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      name="phone"
                      id="phone"
                      format="+998 (##) ###-##-##"
                      allowEmptyFormatting
                      mask="_"
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      F.I.O{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>*</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ borderRadius: "10px", height: "40px" }}
                      id="outlined-adornment-weight"
                      name="fio"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fio}
                      error={formik.touched.fio && formik.errors.fio}
                      helperText={formik.touched.fio && formik.errors.fio}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Viloyat
                      <span style={{ color: "red", fontSize: "12px" }}> *</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ borderRadius: "10px", height: "40px" }}
                      id="outlined-adornment-weight"
                      name="province"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.province}
                      error={formik.touched.province && formik.errors.province}
                      helperText={
                        formik.touched.province && formik.errors.province
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Shahar / Tuman
                      <span style={{ color: "red", fontSize: "12px" }}> *</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ borderRadius: "10px", height: "40px" }}
                      id="outlined-adornment-weight"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                      error={formik.touched.city && formik.errors.city}
                      helperText={formik.touched.city && formik.errors.city}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Aholi punkti
                      <span style={{ color: "red", fontSize: "12px" }}> *</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ borderRadius: "10px", height: "40px" }}
                      id="outlined-adornment-weight"
                      name="residence"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.residence}
                      error={
                        formik.touched.residence && formik.errors.residence
                      }
                      helperText={
                        formik.touched.residence && formik.errors.residence
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Manzil{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>*</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ borderRadius: "10px", height: "40px" }}
                      id="outlined-adornment-weight"
                      name="address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                      error={formik.touched.address && formik.errors.address}
                      helperText={
                        formik.touched.address && formik.errors.address
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    sx={{ width: "100%" }}
                    variant="outlined"
                    rows={4}
                  >
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Ish joyingiz manzili
                      <span style={{ color: "red", fontSize: "12px" }}>*</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ width: "100%", borderRadius: "10px" }}
                      id="outlined-multiline-static"
                      multiline
                      rows={2}
                      name="workplace"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.workplace}
                      error={
                        formik.touched.workplace && formik.errors.workplace
                      }
                      helperText={
                        formik.touched.workplace && formik.errors.workplace
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    sx={{ width: "100%" }}
                    variant="outlined"
                    rows={4}
                  >
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={{ fontWeight: "600" }}
                    >
                      Qo'shimcha
                      <span style={{ color: "red", fontSize: "12px" }}>*</span>
                    </FormHelperText>
                    <OutlinedInput
                      sx={{ width: "100%", borderRadius: "10px" }}
                      id="outlined-multiline-static"
                      multiline
                      rows={3}
                      name="addition"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.addition}
                      error={formik.touched.addition && formik.errors.addition}
                      helperText={
                        formik.touched.addition && formik.errors.addition
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Button
                onClick={() => setTestPromo(true)}
                variant="contained"
                sx={{
                  textTransform: "unset",
                  backgroundColor: "#008DFF",
                  fontSize: { xs: "11px", sm: "10px", md: "13px" },
                  height: "34px",
                  borderRadius: "10px",
                  m: "2px",
                  display: "block",
                }}
              >
                Promo-kod bormi?
              </Button>
              {testPromo && (
                <OutlinedInput
                  sx={{
                    width: "150px",
                    height: "45px",
                    mt: 2,
                    borderRadius: "12px",
                  }}
                  id="outlined-adornment-weight"
                  // value={values.weight}
                  // onChange={handleChange('weight')}
                  // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              )}
            </Box>

            <div style={{ marginTop: "40px" }}>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                To`lov usuli
              </Typography>
              <div>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChangePaymend}
                    sx={{ display: "flex", columnGap: 10 }}
                  >
                    <FormControlLabel
                      value="naqd"
                      control={<Radio />}
                      label="Naqd"
                    />
                    <FormControlLabel
                      value="karta"
                      control={<Radio />}
                      label="Karta orqali"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {value == "karta" && (
                <div style={{ marginBottom: "10px" }}>
                  <Badge
                    badgeContent={value == "karta" ? "✔" : 0}
                    color="primary"
                    sx={{
                      border: value == "karta" && "2px solid #1976D2",
                      borderRadius: "10px",
                      mt: 1,
                    }}
                  >
                    <Typography
                      component="img"
                      sx={{ borderRadius: "10px" }}
                      src="https://asaxiy.uz/custom-assets/images/humo-uzcard.png"
                      alt="#"
                    />
                  </Badge>
                </div>
              )}
              <YandexMaps />
            </div>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Checkbox
                size="small"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography sx={{ fontSize: "12px" }}>
                Xarid qilish
                <Link style={{ textDecoration: "none", color: "#008DFF" }}>
                  qoidalarga
                </Link>{" "}
                roziman
              </Typography>
            </Box>
          </div>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                textTransform: "unset",
                backgroundColor: "#FE7300",
                fontSize: { xs: "11px", sm: "10px", md: "13px" },
                height: "45px",
                borderRadius: "10px",
                m: "2px",
                display: "block",
                ":hover": { background: "#FE7303" },
              }}
            >
              Buyurtma qilish
            </Button>
            <Button
              onClick={() => navigate("/")}
              sx={{
                textTransform: "unset",
                fontSize: { xs: "11px", sm: "10px", md: "13px" },
                fontWeight: "600",
                height: "45px",
                borderRadius: "10px",
                m: "2px",
                display: "block",
                ":hover": { background: "#FE7303", color: "white" },
                color: "#FE7303",
              }}
            >
              Orqaga
            </Button>
          </div>
        </form>
      </div>
      <div> {productSum}</div>
    </ContainerGrid>
  );
};

export default Purchase;
