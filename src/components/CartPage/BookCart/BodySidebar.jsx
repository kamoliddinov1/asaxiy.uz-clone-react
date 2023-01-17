import React from 'react';
import { Box } from '@mui/material';
import Bolimlar from './Bolimlar';
import IshlabChiquvchi from './IshlabChiquvchi';
import Muallif from './Muallif';
import Nashryot from './Nashiryot';
import Muqovasi from './Muqovasi';
import Til from './Til';


const Sidebar = () => {
    return (
        <Box sx={{mt: 3}}>
            <Bolimlar/>
            <IshlabChiquvchi/>
            <Nashryot/>
            <Muallif/>
            <Muqovasi/>
            <Til/>
        </Box>
    );
}

export default Sidebar;