import React from "react";
import { Button, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { FaFilter } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterMobile = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ marginTop: "10px", display: { xs: "block", md: "none" } }}>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "white",
          textTransform: "unset",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          border: "none",
          borderRadius:'10px',
          color: "gray",
          height:'40px',
          ":hover": { border: "none", color: "blue" },
        }}
      >
        <FaFilter /> Filtr
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "fixed",
            background: "white",
            boxShadow:'none',
          }}
        >
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1, color: "black" }}
              variant="h6"
              component="div"
            >
              Filtr
            </Typography>
            <IconButton
              edge="start"
              color="default"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
       <Box sx={{mt:6}}>
        {children}
        </Box>
      </Dialog>
    </Box>
  );
};
export default FilterMobile;
