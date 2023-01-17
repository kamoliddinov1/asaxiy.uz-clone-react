import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { PatternFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import YonPanel from "../Footer/Item";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeToken } from '../../redux/auth';

const styleButton = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", sm: "60%" },
  bgcolor: "none",
};

const ShaxsiyCabinet = ({ children }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogOut = () => {
    dispatch(removeToken());
    window.location.reload(false);
  };
  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...styleButton }}>
          <Box sx={{ mr: "auto", display: "flex", justifyContent: "end" }}>
            <IconButton
              size="large"
              onClick={handleClose}
              sx={{ color: "white", fontWeight: "bold", mr: "-15px" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              background: "white",
              borderRadius: "15px",
              width: "100%",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              borderRadius="15px"
            >
              <Grid item xs={12} sm={12} md={7} lg={7} sx={{ height: "100%" }}>
                <Box>
                  <DialogTitle sx={{ textAlign: "center", fontWeight: "550" }}>
                    Kirish yoki shaxsiy kabinet yaratish
                  </DialogTitle>
                  <DialogContent>
                    <Divider />
                    <Box
                      noValidate
                      component="form"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        m: "auto",
                        width: { xs: "100%", sm: "70%" },
                        pt: 3,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "13px", color: "gray", mb: 1 }}
                      >
                        Telefon
                      </Typography>
                      <FormControl fullWidth>
                        <PatternFormat
                          control={<TextField />}
                          style={{
                            fontWeight: "600",
                            color: "gray",
                            padding: "6px",
                            fontSize: "14px",
                            border: "1px solid gray",
                            borderRadius: "8px",
                            height: "25px",
                          }}
                          //   value={formik.values.phone}
                          //   onChange={formik.handleChange}
                          name="phone"
                          id="phone"
                          format="+998 (##) ###-##-##"
                          allowEmptyFormatting
                          mask="_"
                        />
                      </FormControl>
                      <Button
                        variant="contained"
                        sx={{ mt: 4, height: "40px", fontSize: "12px" }}
                      >
                        Faollashtirish kodini oling
                      </Button>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleLogOut}
                      sx={{
                        color: "black",
                        textTransform: "unset",
                        mr: "auto",
                        fontWeight: "600",
                      }}
                    >
                      <LogoutIcon fontSize="medium" /> Chiqish
                    </Button>
                  </DialogActions>
                </Box>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  height: "100%",
                }}
              >
                <YonPanel />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ShaxsiyCabinet;
