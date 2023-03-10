import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Imagelog from '../../assets/forgot-password.webp'
import Imglog from '../../assets/Login.webp'
import Login from './Login';

const LoginPage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={12} sm={5}>
          <Login />
        </Grid>
        <Grid item xs={12} sm={7} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Box>
            <img width='100%' src={Imglog} alt="#" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default LoginPage;