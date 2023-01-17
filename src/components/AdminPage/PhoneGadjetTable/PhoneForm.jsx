import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Select,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Services from "../../../services/telefonlar";
import { useNavigate, useLocation } from "react-router-dom";


const SignupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.tele || {
    img: "",
    name: "",
    comment: 0,
    birinchiNarxi: "",
    narxi: "",
    kreditNarxi: "",
    quantity: "",
    category: "",
    category2: "",
  };

  const formik = useFormik({
    initialValues: data,

    validationSchema: Yup.object({
      img: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        name: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        comment: Yup.number()
        .max(200, "200 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        birinchiNarxi: Yup.string()
        .max(30, "30 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        narxi: Yup.string()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        kreditNarxi: Yup.string()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        quantity: Yup.number()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        category: Yup.string()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        category2: Yup.string()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
    }),

    onSubmit: (values) => {
      // eslint-disable-next-line no-lone-blocks
      {
        data.id
          ? Services.update(data.id, values).then(() => {
              navigate("/phonegadjet");
            })
          : Services.create(values).then(() => {
              navigate("/phonegadjet");
            });
      }

      // alert(JSON.stringify(values, null, 2));
    },
  });

  const formdata = [
    {
      myfiled: (
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          // variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
        />
      ),
    },
    {
      myfiled: (
        <TextField
          fullWidth
          id="birinchiNarxi"
          name="birinchiNarxi"
          label="Birinchi narxi"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birinchiNarxi}
          error={formik.touched.birinchiNarxi && formik.errors.birinchiNarxi}
          helperText={formik.touched.birinchiNarxi && formik.errors.birinchiNarxi}
        />
      ),
    },
    {
      myfiled: (
        <TextField
          fullWidth
          id="narxi"
          name="narxi"
          label="Narxi"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.narxi}
          error={formik.touched.narxi && formik.errors.narxi}
          helperText={formik.touched.narxi && formik.errors.narxi}
        />
      ),
    },
    {
      myfiled: (
        <TextField
          fullWidth
          id="kreditNarxi"
          name="kreditNarxi"
          label="Kredit narxi"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.kreditNarxi}
          error={formik.touched.kreditNarxi && formik.errors.kreditNarxi}
          helperText={formik.touched.kreditNarxi && formik.errors.kreditNarxi}
        />
      ),
    },
    {
      myfiled: (
        <TextField
          fullWidth
          id="quantity"
          name="quantity"
          label="Quantity"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.quantity}
          error={formik.touched.quantity && formik.errors.quantity}
          helperText={formik.touched.quantity && formik.errors.quantity}
        />
      ),
    },
    {
      myfiled: (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Chegirma</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="category"
            name="category"
            sx={{ width: "100%" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            error={formik.touched.category && formik.errors.category}
            helperText={formik.touched.category && formik.errors.category}
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="chegirma">chegirma</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      myfiled: (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Yangi</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="category2"
            name="category2"
            sx={{ width: "100%" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category2}
            error={formik.touched.category2 && formik.errors.category2}
            helperText={formik.touched.category2 && formik.errors.category2}
          >
            <MenuItem value="0">0</MenuItem>
            <MenuItem value="yangi">yangi</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      myfiled: (
        <TextField
          fullWidth
          id="img"
          name="img"
          label="Img"
          variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.img}
          error={formik.touched.img && formik.errors.img}
          helperText={formik.touched.img && formik.errors.img}
        />
      ),
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          m: 4,
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "rgba(149, 157, 65, 0.2) 0px 10px 24px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            ml: "12%",
            pt: 3,
            mb: 4,
            fontWeight: "600",
            color: "#33354A",
          }}
        >
          {data.id ?
          "Telefonlar va Gadjetlar sahifasi ma'lumotini yangilash" :
          "Telefonlar va Gadjetlar  sahifasiga yangi malumot qo'shish"
        }
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ margin: "0px 10% 5px 10%" }}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {formdata.map((ele, id) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={id}>
                  {ele.myfiled}
                </Grid>
              ))}
            </Grid>
            <Stack
              direction="row"
              spacing="10%"
              sx={{ width: "100%", justifyContent: "end", mt: 2 }}
            >
              <Button
                variant="outlined"
                id="btnDel"
                onClick={() => navigate("/phonegadjet")}
              >
                Bekor qilish
              </Button>

              <Button
                type="submit"
                variant="outlined"
                id="btnplus"
                sx={{ float: "right" }}
              >
                Qoshish +
              </Button>
            </Stack>
            <br />
          </div>
        </form>
      </Box>
    </Box>
  );
};

export default SignupForm;
