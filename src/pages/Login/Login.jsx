import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import service from "../../services/auth";
import "./index.css";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import { setToken } from "../../redux/auth";
import { useDispatch } from "react-redux";

const SignupForm = () => {
  const dispatch = useDispatch();

  const [found, setFound] = useState(false);
  const [loading, setloading] = useState(false);

  const data = {
    fullname: "",
    username: "",
    password: "",
    role: "",
  };

  const formik = useFormik({
    initialValues: data,

    validationSchema: Yup.object({
      fullname: Yup.string()
        .max(30, "30 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      username: Yup.string()
        .max(20, "20 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
      password: Yup.string()
        .max(15, "15 yoki undan kam belgidan iborat bolishi kerak")
        // .min(8, "8 tadan kam bolmagan belgi yoki raqam yozing")
        .required("Katakchani toldirish talab qilinadi"),
      role: Yup.string()
        .max(30, "30 yoki undan kam belgidan iborat bolishi kerak")
        .required("Katakchani toldirish talab qilinadi"),
    }),

    onSubmit: (values) => {
      // eslint-disable-next-line no-lone-blocks
      service.getToken(values).then((res) => {
        if (res) {
          dispatch(setToken(JSON.stringify(res.id)));
          setTimeout(() => {
            window.location.reload(false);
          }, 1000)
        }
      })
        .catch((err) => {
          console.log(err);
          setFound(true);
        });
      setloading(!loading);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ margin: "0px 10% 5px 10%" }}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#EB5424" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  label="Full Name"
                  autoFocus
                  id="fullname"
                  name="fullname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullname}
                  error={formik.touched.fullname && formik.errors.fullname}
                  helperText={formik.touched.fullname && formik.errors.fullname}
                />
                <TextField
                  variant="standard"
                  // margin="normal"
                  required
                  fullWidth
                  label="Username"
                  autoComplete="Username"
                  id="username"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  error={formik.touched.username && formik.errors.username}
                  helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  label="Role"
                  autoComplete="Role"
                  id="role"
                  name="role"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                  error={formik.touched.role && formik.errors.role}
                  helperText={formik.touched.role && formik.errors.role}
                />
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
                {found && (
                  <p style={{ color: "red", fontSize: 20 }}>
                    User has not found.
                  </p>
                )}
                <Button
                  fullWidth
                  id="btnplus"
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, textTransform: "unset" }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </form>
    </Box>
  );
};

export default SignupForm;
