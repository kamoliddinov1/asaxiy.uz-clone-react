import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import servicesBooks from '../../../services/kitob';
import { useNavigate } from "react-router";

const BooksList = () => {
  const navigate = useNavigate()
  const [stateBook, setStateBook] = useState([]);

  useEffect(() => {
    servicesBooks.getAll().then((res) => setStateBook(res))
  }, [])

  const handleEdit = (row) => {
    const product = stateBook.find((item) => item.id === row);
    navigate("/maxsulot", { state: { product } });
  };

  return (
    <div>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        {stateBook.slice(0, 5).map((ele, id) => (
          <Box key={id}>
            <ListItemButton sx={{ columnGap: 1 }} onClick={() => handleEdit(ele.id)}>
              <Typography component="img" sx={{ width: { xs: '30%', sm: '12%', md: '30%' } }} src={ele.img} alt="#" />
              <ListItemText primary={ele.name} secondary="Asaxiy Books Kitoblari" />
            </ListItemButton>
            <Divider />
          </Box>
        ))}
      </List>
    </div>
  );
};
export default BooksList;
