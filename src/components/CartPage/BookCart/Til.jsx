import React from "react";
import { Box } from "@mui/material";
import MyCheckBoxList from "../../Generic/CheckBoxList";

const data1 = [
  { id: 1, title: "Fransuzcha" },
  { id: 2, title: "O'zbekcha" },
  { id: 3, title: "O'zb/Rus" },
  { id: 4, title: "Ruscha" },
  { id: 5, title: "Tojik tili" },
  { id: 6, title: "Uzb/English" },
  { id: 7, title: "на английском" },
  { id: 8, title: "на Арабском" },
  { id: 9, title: "Туркча" },
];

const Til = () => {
  return (
    <Box sx={{mt:3}}>
      <MyCheckBoxList mydata={data1} nomi="Til" />
    </Box>
  );
};
export default Til;
