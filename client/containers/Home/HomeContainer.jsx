import React from 'react'
import { Box } from '@mui/material'
import VerticalColumn from '../../components/Cards/Albums/Vertical/VerticalColumn';
import HorizontalColumn from '../../components/Cards/Albums/Horizontal/HorizontalColumn'
import Topbar from '../../components/Layout/Topbar';

const HomeContainer = () => {
    return (
        <>
            <Topbar />
            <Box mt={'50px'} width={'87%'} mb={20}>
                <HorizontalColumn />
                <VerticalColumn />
                <VerticalColumn />
                <VerticalColumn />
            </Box>
        </>
    )
}

export default HomeContainer