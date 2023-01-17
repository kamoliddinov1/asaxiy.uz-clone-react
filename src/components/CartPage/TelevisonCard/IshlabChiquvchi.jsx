import React from "react";
import { Box } from "@mui/material";
import MyCheckBoxList from "../../Generic/CheckBoxList";

const data1 = [
  { id: 1, title: "Artel" },
  { id: 2, title: "Goldstar" },
  { id: 3, title: "Hisense" },
  { id: 4, title: "Immer" },
  { id: 5, title: "LG Electironics" },
  { id: 6, title: "MOONX" },
  { id: 7, title: "Panasonic" },
  { id: 8, title: "Premier" },
  { id: 9, title: "Rosso" },
  { id: 10, title: "Samsung" },
  { id: 11, title: "Shivaki" },
  { id: 12, title: "Shivaki" },
  { id: 13, title: "Sony" },
  { id: 14, title: "TCL" },
  { id: 15, title: "Toshiba" },
  { id: 16, title: "Vesta" },
];

const IshlabChiquvchi = () => {
  return (
    <Box sx={{}}>
      <MyCheckBoxList mydata={data1} nomi="Ishlab Chiqaruvchi" />
    </Box>
  );
};
export default IshlabChiquvchi;
