import React from 'react';
import { Box } from '@mui/material';
import Departments from "./Departments";

const Sidebar = () => {
    return (
        <Box sx={{mt: 3}}>
            <Departments/>
        </Box>
    );
}

export default Sidebar;