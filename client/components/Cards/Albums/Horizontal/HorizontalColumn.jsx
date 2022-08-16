import React, { useContext } from 'react'
import {
    Typography,
    Grid
} from '@mui/material'
import PlaylistHorizontalCard from './PlaylistHorizontalCard'
import { UserContext } from '../../../../context/UserContext'

const HorizontalColumn = ({ data }) => {
    const { isAuth } = useContext(UserContext)
    return (
        <>
            <Typography variant='h1' fontSize={'30px'} fontWeight={600}>
                Good Evening
            </Typography>
            {isAuth ?
                <Grid container spacing={3} mt={'1px'}>
                    {data.map((d) => (<Grid item xs={6} md={4} key={d.id}>
                        <PlaylistHorizontalCard img={d.img} title={d.title} id={d.id} />
                    </Grid>))}
                </Grid>
                : ""}
        </>
    )
}

export default HorizontalColumn