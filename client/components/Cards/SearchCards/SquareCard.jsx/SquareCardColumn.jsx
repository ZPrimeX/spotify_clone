import React from 'react'
import { Grid } from '@mui/material'
import SquareCard from './SquareCard'

const SquareCardColumn = () => {
    return (
        <>
            <Grid container rowSpacing={3} ml={1.4}>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
                <Grid item xs={12} md={4} lg={1.1}>
                    <SquareCard />
                </Grid>
            </Grid>
        </>
    )
}

export default SquareCardColumn