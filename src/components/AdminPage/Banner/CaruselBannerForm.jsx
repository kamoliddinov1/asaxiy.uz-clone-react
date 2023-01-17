import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Services from "../../../services/caruselBanner";
import { useNavigate, useLocation } from "react-router-dom";


const SignupForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state?.tele || {
    img: "",
    alt: "",
  };

  const formik = useFormik({
    initialValues: data,

    validationSchema: Yup.object({
      img: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
        alt: Yup.string()
        .max(120, "120 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
    }),

    onSubmit: (values) => {
      // eslint-disable-next-line no-lone-blocks
      {
        data.id
          ? Services.update(data.id, values).then(() => {
              navigate("/glavnibanner");
            })
          : Services.create(values).then(() => {
              navigate("/glavnibanner");
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
          id="alt"
          name="alt"
          label="Name"
          // variant="outlined"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.alt}
          error={formik.touched.alt && formik.errors.alt}
          helperText={formik.touched.alt && formik.errors.alt}
        />
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
          { data.id ?
            "Carusell Bannerni  malumotni yangilash" :
            "Carusell Bannerga yangi malumot qo'shish"
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
                onClick={() => navigate("/glavnibanner")}
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
