import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";

const data1 = [
  { id: 1, title: "Qattiq" },
  { id: 2, title: "Yumshoq" },
  { id: 3, title: "Yumshoq + futlyar (g'ilof)" },
];
const Muqovasi = () => {
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

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        mt: 3,
        borderRadius: "15px",
        color: "gray",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "16px", m: "5px 15px" }}>
        Muqovasi
      </Typography>
      {data1.map((value, id) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <Box  key={id}>
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
                <Typography fontSize="14px" fontWeight="500" id={labelId}>
                  {value.title}
                </Typography>
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        );
      })}
    </List>
  );
};
export default Muqovasi;
