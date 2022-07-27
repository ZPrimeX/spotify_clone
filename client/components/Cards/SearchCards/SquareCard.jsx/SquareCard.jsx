import React from 'react'
import { Grid, Box, Typography } from '@mui/material'


const SquareCard = () => {
    return (
        <>
            <Grid container spacing={2} mt={3}>
                <Box height={'190px'} width={'190px'} bgcolor="green" borderRadius={'15px'} display={'flex'}>
                    <Typography variant='h5' m={2}>Genre</Typography>
                </Box>
            </Grid>
        </>
    )
}

export default SquareCard