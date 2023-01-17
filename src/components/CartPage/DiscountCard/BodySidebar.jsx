import React from 'react';
import { Box } from '@mui/material';
import Bolimlar from './Bolimlar';
import IshlabChiquvchi from './IshlabChiquvchi';

const Sidebar = () => {
    return (
        <Box sx={{mt: 3}}>
            <Bolimlar/>
            <IshlabChiquvchi/>
        </Box>
    );
}

export default Sidebar;