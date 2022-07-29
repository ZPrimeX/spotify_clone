import React from 'react'
import {
    Typography,
    Grid
} from '@mui/material'
import PlaylistHorizontalCard from './PlaylistHorizontalCard'

const HorizontalColumn = ({ data }) => {
    return (
        <>
            <Typography variant='h1' fontSize={'30px'} fontWeight={600}>
                Good Evening
            </Typography>
            <Grid container spacing={3} mt={'1px'}>
                {data.map((d) => (<Grid item xs={6} md={4} key={d.id}>
                    <PlaylistHorizontalCard img={d.img} title={d.name} />
                </Grid>))}
            </Grid>
        </>
    )
}

export default HorizontalColumn