import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { BsGlobe2 } from "react-icons/bs";
import LanguageIcon from '@mui/icons-material/Language';
import { Box } from "@mui/material";

const options = ["Русский", "O`zbekcha"];

export const Til = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Til</InputLabel>
      <Select
        fullWidth
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label={age}
        onChange={handleChange}
      >
        <MenuItem value={"O'bekcha"}>O'bekcha</MenuItem>
        <MenuItem value={"Русский"}>Русский</MenuItem>
      </Select>
    </FormControl>
  );
};

const Tillar = () => {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
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
      <IconButton
        variant="contained"
        ref={anchorRef}
        onClick={handleToggle}
        aria-label="split button"
        sx={{ m: "0px 1px", ":hover": { color: "#008DFF" }}}
        size="medium"
        color="inherit"
      >
        <Box>
          <Badge sx={{mb:0}}>
            <LanguageIcon fontSize="inherit"/>
          </Badge>
          <div onClick={handleClick} fontSize="12px" style={{textTransform:'unset', display:'flex', alignItems:'center', fontSize:'12px'}}>
            {options[selectedIndex]}
              <ArrowDropDownIcon />
          </div>
        </Box>
      </IconButton>
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
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={index}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      sx={{zIndex:5}}
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
}

export default  Tillar;