import React from 'react'
import { Box, Typography } from '@mui/material'
import Topbar from '../../components/Layout/Topbar'
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PlaylistContainer = () => {
    return (
        <>
            <Box width={'100%'} height={'350px'} bgcolor='red'>
                <Topbar />
                <Box padding={5}>
                    <Typography variant='h1' mt={15}>Playlist Name</Typography>
                    <Typography>Description</Typography>
                    <Box display={'flex'}>
                        <Typography>Artist</Typography>
                        <Typography>Songs</Typography>
                        <Typography>Duration</Typography>
                    </Box>
                </Box>
            </Box>
            <Box mt={2}>
                <PlayCircleFilled />
                <FavoriteBorderIcon />
            </Box>
            <Box display={'flex'} justifyContent={'space-evenly'} mt={3}>
                <Typography>#</Typography>
                <Typography>Title</Typography>
                <Typography>Album</Typography>
                <Typography>Date added</Typography>
                <Typography>Duration</Typography>
            </Box>
            <hr />
            <Box>
                {/* <Songs/> */}
            </Box>
        </>
    )
}

export default PlaylistContainer