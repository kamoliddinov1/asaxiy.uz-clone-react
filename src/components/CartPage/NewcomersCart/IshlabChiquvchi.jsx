import React from "react";
import { Box } from "@mui/material";
import MyCheckBoxList from "../../Generic/CheckBoxList";

const data1 = [
  { id: 1, title: "A4Tech" },
  { id: 2, title: "Corsair" },
  { id: 3, title: "Janome" },
  { id: 4, title: "LG Electronics" },
  { id: 5, title: "Razer" },
  { id: 6, title: "Samsung" },
  { id: 7, title: "Xiaomi" },
];

const IshlabChiquvchi = () => {
  return (
    <Box>
      <MyCheckBoxList mydata={data1} nomi="Ishlab Chiqaruvchi" />
    </Box>
  );
};
export default IshlabChiquvchi;
