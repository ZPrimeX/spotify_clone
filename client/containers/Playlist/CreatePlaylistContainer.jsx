import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Topbar from '../../components/Layout/Topbar'

const CreatePlaylistContainer = () => {
    return (
        <>
            <Topbar />
            <Box display={'flex'} alignItems='center' padding={5}>
                <Avatar variant='square' sx={{ width: 225, height: 225 }} />
                <Box padding={4}>
                    <Typography>Playlist</Typography>
                    <Typography variant='h1'>My Playlist #X</Typography>
                    <Typography variant='h6'>Owner</Typography>
                </Box>
            </Box>
            <Box padding={4}>
                <hr />
                <Typography>Let's find something for your playlist</Typography>
            </Box>
        </>
    )
}

export default CreatePlaylistContainer