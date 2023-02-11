import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Badge from "@mui/material/Badge";
import { data } from "./Data";
import { GrAppsRounded } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileDirectory = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <IconButton
        sx={{ m: "0px 10px", ":hover": { color: "#008DFF" } }}
        size="small"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleClickOpen}
      >
        <Box>
          <Badge sx={{ color: "black" }}><GrAppsRounded /></Badge>
          <Typography variant="body2" sx={{ color: "black", fontSize: "8px" }}>
            Katalog
          </Typography>
        </Box>
      </IconButton>
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
              Barcha bolimlar
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
        <Box sx={{ mt: 8 }}>
          <Box
          >
            <List>
              {data.map((ele, id) => (
                <ListItem key={id} disablePadding component={Link} to={ele.link} onClick={handleClose} sx={{color:'black'}}>
                  <ListItemButton
                    sx={{ columnGap: 1, ":active": { background: "white" } }}
                  >
                    <img width="16px" src={ele.icon} alt="#" />
                    <Typography sx={{ fontWeight: "550", fontSize: "13px" }}>
                      {" "}
                      {ele.title}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default MobileDirectory;
