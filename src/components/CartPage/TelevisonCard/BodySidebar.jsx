import React from 'react';
import { Box } from '@mui/material';
import IshlabChiquvchi from "./IshlabChiquvchi";
import Diagonali from './Diagonali' ;
import HdAniqligi from './HdAniqligi'
import Smart from './Smart';

const Sidebar = () => {
    return (
        <Box sx={{mt: 3}}>
            <IshlabChiquvchi/>
            <Diagonali/>
            <HdAniqligi/>
            <Smart/>
        </Box>
    );
}

export default Sidebar;