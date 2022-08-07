import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import RectangleCard from '../../components/Cards/SearchCards/RectangleCard.jsx/RectangleCard'
import SquareCardColumn from '../../components/Cards/SearchCards/SquareCard.jsx/SquareCardColumn'
import Topbar from '../../components/Layout/Topbar'
import SquareCard from '../../components/Cards/SearchCards/SquareCard.jsx/SquareCard'

const SearchContainer = () => {
    return (
        <>
            <Topbar />
            <Box padding={5}>
                <Box mt={5}>
                    <Typography variant='h5'>Your top genres</Typography>
                    <RectangleCard />
                </Box>
                <Box mt={5} mb={20}>
                    <Typography variant='h5'>Browse all</Typography>
                    <SquareCardColumn />
                    <SquareCardColumn />
                    <SquareCardColumn />
                    <SquareCardColumn />
                    <SquareCardColumn />
                    <SquareCardColumn />
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
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SearchContainer