import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button, Typography, InputBase } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import { Concat } from "../../../helpers/concat";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [filData, setFilData] = useState([]);
  let data = Concat();

  const handleSubmit  = (event) => {
    const searchWord = event.target.value;
    let newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilData([]);
    } else {
      setFilData(newFilter);
    }
  };
  
  const handleEdit = () => {
    if (filData.length != 0) {
      navigate("/searchcart", { state: { filData }});
      setFilData([]);
    }
  };

  const handleProduct = (row) => {
    const product = filData.find((item) => item.id === row);
    navigate("/maxsulot", { state: { product } });
    setFilData([]);
  };



  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: { xs: "32", sm: "34px" },
          borderRadius: "10px",
          backgroundColor: "#008DFF",
          border: "1px solid #008DFF",
          ":hover": { backgroundColor: "#0864af" },
        }}
      >
        <InputBase
          fullWidth
          sx={{
            flex: 1,
            borderRadius: "10px",
            pl: 1,
            backgroundColor: "white",
            fontSize: "12px",
            color: "#007bff",
          }}
          placeholder="Qidirish..."
          onChange={handleSubmit}
        />
        <Button
          onClick={handleEdit}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "10px",
            textTransform: "unset",
          }}
        >
          <SearchIcon fontSize="small" />
          <Typography
            sx={{
              mr: "10px",
              color: "white",
              fontWeight: "500",
              fontSize: "13px",
              fontFamily: "unset",
            }}
          >
            Qidirish
          </Typography>
        </Button>
      </Box>

      {filData.length != 0 && (
        <Box
          sx={{
            width: { sm: "75%", md: "35%", lg: "48%" },
            bgcolor: "background.paper",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            borderRadius: "12px",
            zIndex: 3,
            position: "absolute",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
            }}
          >
            <Typography sx={{ color: "gray", fontSize: "13px" }}>
              Qidiruv natijalari({filData.length})
            </Typography>
            <Button
              onClick={handleEdit}
              sx={{
                color: "#007bff",
                fontSize: "11px",
                textTransform: "unset",
              }}
            >
              Barcha mahsulotlarni ko'rish <NavigateNextIcon fontSize="small" />
            </Button>
          </Box>
          <nav aria-label="main mailbox folders">
            <List>
              {filData.slice(0, 5).map((ele, id) => (
                <ListItem
                  disablePadding
                  key={id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemButton onClick={() => handleProduct(ele.id)}>
                    <ListItemIcon>
                      <Typography
                        component="img"
                        sx={{
                          width: { xs: "25px", sm: "45px", lg: "50px" },
                          zIndex: 1,
                          m: 1,
                        }}
                        src={ele.img}
                        alt="#"
                      />
                    </ListItemIcon>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          width: "60%",
                          fontSize: {
                            xs: "11px",
                            sm: "14px",
                            md: "12px",
                            lg: "14px",
                          },
                          color: "black",
                        }}
                      >
                        {ele.name}
                      </Typography>
                      <div style={{ float: "right" }}>
                        <Typography
                          sx={{
                            fontSize: "11px",
                            textDecoration: "line-through",
                            color: "#AF5679",
                          }}
                        >
                          {ele.birinchiNarxi > "1" &&
                            ele.birinchiNarxi + " " + "so'm"}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textAlign: "center",
                            color: "#007bff",
                          }}
                        >
                          {ele.narxi} so'm
                        </Typography>
                      </div>
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      )}
    </div>
  );
}
export default SearchBar;