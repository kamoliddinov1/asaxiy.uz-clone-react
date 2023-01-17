import React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Box } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MySelectButton = ({ options, selectedindex, setselectedindex }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  //   const [selectedIndex, setSelectedIndex] = React.useState(12);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedindex]}`);
  };

  const handleMenuItemClick = (event, option) => {
    setselectedindex(option);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Box
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        sx={{
          border: "1px solid #008DFF",
          height: "20px",
          //   width: "100px",
          borderRadius: "8px",
          display: "flex",
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            background: "none",
            color: "gray",
            ":hover": { background: "none" },
            width: "100%",
            height: "20px",
            fontSize: "12px",
            textTransform: "unset",
            pr: "12px",
          }}
        >
          {selectedindex}
        </Button>
        <button
          onClick={handleToggle}
          style={{
            border: "none",
            borderRadius: "6px",
            width: "26px",
            height: "20px",
            background: "#008DFF",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </Box>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map((option, id) => (
                    <MenuItem
                      key={id}
                      sx={{
                        backgroundColor: "white",
                        ":hover": { color: "blue", zIndex: 3 },
                      }}
                      //   disabled={option[9]}
                      selected={option}
                      onClick={(event) => handleMenuItemClick(event, option)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
export default MySelectButton;
