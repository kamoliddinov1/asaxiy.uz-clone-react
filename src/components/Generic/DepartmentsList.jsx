import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";

const DepartmentsList = ({dataDepartment}) => {
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
        maxWidth: '100%',
        bgcolor: "background.paper",
        mb: 3,
        borderRadius: "15px",
        color: "black",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontFamily:'sans-serif', m: "5px 15px", color:"gray" }}>
        Bo'limlar
      </Typography>
      {dataDepartment.map((value, id) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <Box  key={id}>
            <ListItem disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <Typography id={labelId} sx={{m:'15px 0px', fontFamily:'sans-serif', fontSize:"16px" }}>
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
export default DepartmentsList;
