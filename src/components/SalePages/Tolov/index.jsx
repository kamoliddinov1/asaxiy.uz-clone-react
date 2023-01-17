import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";

const Payment = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "40%" },
        mt: 5,
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Box p="5%">
        <Typography variant="h4" sx={{ fontWeight: "550" }}>
          To'lov qilish
        </Typography>
        <Typography color="GrayText" sx={{ mt: 4, fontWeight: "550" }}>
          Buyurtma raqamini bexato kiriting
        </Typography>
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
    </Box>
  );
};

export default Payment;
