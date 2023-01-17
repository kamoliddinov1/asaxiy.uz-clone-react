import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import servicesNews from "../../../services/news";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    servicesNews.getAll().then((res) => setNewsData(res));
  }, []);

  return (
    <Box >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {newsData && newsData?.map((ele, id) => (
          <Grid item xs={12} sm={6} md={4} sx={{ mb: "auto" }} key={id}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ width: "100%" }}
                  image={ele.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
                    {ele.title}
                  </Typography>
                  <Box sx={{ display: "flex", columnGap: 2, mt: 2 }}>
                    <Box sx={{ fontWeight: "600" }}>
                      <FaCalendarAlt color="blue" /> {ele.sana}
                    </Box>
                    <Box sx={{ fontWeight: "600" }}>
                      <FaEye color="blue" /> {ele.sana}
                    </Box>
                  </Box>
                  <Typography fontWeight="600" color="text.secondary" mt={2}>
                    {ele.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default NewsCard;
