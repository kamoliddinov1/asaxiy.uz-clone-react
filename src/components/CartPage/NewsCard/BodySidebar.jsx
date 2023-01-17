import React from 'react';
import { Box } from '@mui/material';
import Search from './Search';
import OmmabopYangiliklar from './OmmabopYangiliklar';


const Sidebar = () => {
    return (
        <Box sx={{}}>
            <Search/>
            <OmmabopYangiliklar/>
        </Box>
    );
}

export default Sidebar;