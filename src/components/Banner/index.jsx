import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CaruselBanner from "./CaruselBanner"
import DataBanner from './DataBanner';


const Banner = () => {
  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}  md={9} sx={{borderRadius:'15px'}}>
        <CaruselBanner/>
        </Grid>
        <Grid item xs={12} md={3} sx={{borderRadius:'15px'}}>
         <DataBanner />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;