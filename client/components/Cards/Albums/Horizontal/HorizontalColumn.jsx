import React from 'react'
import {
    Typography,
    Grid
} from '@mui/material'
import PlaylistHorizontalCard from './PlaylistHorizontalCard'

const HorizontalColumn = () => {
    return (
        <>
            <Typography variant='h1' fontSize={'30px'} fontWeight={600}>
                Good Evening
            </Typography>
            <Grid container spacing={3} mt={'1px'}>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <PlaylistHorizontalCard />
                </Grid>
            </Grid>
        </>
    )
}

export default HorizontalColumn