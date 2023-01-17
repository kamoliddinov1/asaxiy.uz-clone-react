import React from 'react';
import { Box } from '@mui/material';
import Kitoblar from "./Kitoblar";
import HomeProduct from './Product';

const Sidebar = () => {
    return (
        <Box sx={{mt: 3}}>
            <Kitoblar/>
            <HomeProduct/>
        </Box>
    );
}

export default Sidebar;