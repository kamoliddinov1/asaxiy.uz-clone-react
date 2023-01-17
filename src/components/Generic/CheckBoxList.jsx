import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyCheckboxList = ({ mydata, nomi }) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  ///////////////////////////////////////////////////////////////
  const [test, setTest] = useState(7);

  const handleTest = () => {
    setTest(test == 7 ? mydata.length : 7);
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "15px",
        color: "gray",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        mb: 5,
        mt: 1
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "16px", m: "5px 15px" }}>
        {nomi}
      </Typography>
      {mydata.slice(0, test).map((value, id) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <Box key={id}>
            <ListItem disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <Typography fontSize="15px" id={labelId}>
                  {value.title}
                </Typography>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        );
      })}
      <ListItem sx={{ background: "#DFF1FF", display: mydata.length <= 7 ? 'none' : 'flex' }}>
        <ListItemButton
          role={undefined}
          onClick={handleTest}
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "blue",
            ":hover": { background: "none" },
          }}
        >
          {test == 7 ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default MyCheckboxList;
