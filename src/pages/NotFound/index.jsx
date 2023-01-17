import React from "react";
import NotFaund from "../../assets/404-error-page-not-found.jpg";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <img
        width="100%"
        height="100%"
        src="https://media1.thehungryjpeg.com/thumbs2/ori_3748983_b7d22n6sceatn4wvzabyzc5wa62l3au2oi52y8t5_404-error-vector-error-404-page-not-found-creative-template-problem-disconnect-concept-illustration.jpg"
        alt="#"
      />
      <Button
        LinkComponent={Link}
        to="/"
        sx={{
          position: "absolute",
          top: "75%",
          left: "45%",
          right: "auto",
          background: "#00FF01",
          color: "white",
          textTransform: "unset",
        }}
      >
        ortga qaytish
      </Button>
    </Box>
  );
};

export default NotFound;
