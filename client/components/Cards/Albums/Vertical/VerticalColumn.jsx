import React from 'react'
import PlaylistVerticalCard from './PlaylistVerticalCard'
import {
    Grid,
    Box,
    Link
} from '@mui/material'

const VerticalColumn = () => {
    return (
        <>
            <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                <Link href="#" fontSize={'25px'} fontWeight={600} mt={5} color="#fff" underline="hover">
                    Recently Played
                </Link>
                <Link fontSize={13} href="#" underline="hover" color="#B3B3B3" sx={{ mt: 6, mr: 7 }}>SEE ALL</Link>
            </Box>
            <Grid container rowSpacing={3} mt={'1px'}>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
                <Grid item xs={6} md={1.5}>
                    <PlaylistVerticalCard />
                </Grid>
            </Grid>
        </>
    )
}

export default VerticalColumn