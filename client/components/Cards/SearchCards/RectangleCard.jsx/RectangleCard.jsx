import { Box, Typography } from '@mui/material'
import React from 'react'

const RectangleCard = () => {
    return (
        <>
            <Box display={'flex'} mt={3} alignItems='center'>
                <Box width={'400px'} height='225px' bgcolor={'orange'} borderRadius='15px'>
                    <Typography variant='h4' m={2}>Hip-Hop</Typography>
                </Box>
                <Box width={'400px'} height='225px' bgcolor={'violet'} borderRadius='15px' ml={3}>
                    <Typography variant='h4' m={2}>Pop</Typography>
                </Box>
                <Box width={'400px'} height='225px' bgcolor={'magenta'} borderRadius='15px' ml={3}>
                    <Typography variant='h4' m={2}>Dance/Electronic</Typography>
                </Box>
                <Box width={'400px'} height='225px' bgcolor={'red'} borderRadius='15px' ml={3}>
                    <Typography variant='h4' m={2}>Rock</Typography>
                </Box>
            </Box>
        </>
    )
}

export default RectangleCard