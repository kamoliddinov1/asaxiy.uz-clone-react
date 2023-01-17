import React from "react";
import { Box } from "@mui/material";
import CheckBoxList from "../../Generic/CheckBoxList";

const mydata = [
  { id: 1, title: "32" },
  { id: 2, title: "40" },
  { id: 3, title: "43" },
  { id: 4, title: "49" },
  { id: 5, title: "50" },
  { id: 6, title: "55" },
  { id: 7, title: "60" },
  { id: 8, title: "65" },
  { id: 9, title: "70" },
  { id: 10, title: "75" },
  { id: 11, title: "77" },
  { id: 12, title: "82" },
  { id: 13, title: "85" },
  { id: 13, title: "86" },
];

const CheckboxList = () => {
  return (
    <Box>
      <CheckBoxList mydata={mydata} nomi="Dioganali" />
    </Box>
  );
};
export default CheckboxList;
