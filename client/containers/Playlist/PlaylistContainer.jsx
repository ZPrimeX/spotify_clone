import React from 'react'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import Topbar from '../../components/Layout/Topbar'
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PlaylistContainer = ({ playlist }) => {
    return (
        <>
            <Box width={'100%'} height={'350px'}>
                <Topbar />
                <Box paddingTop={9} paddingLeft={4} display='flex' flexDirection={'row'} alignItems='center'>
                    <Avatar src='https://source.unsplash.com/random' variant='square' sx={{ height: '200px', width: '200px' }} />
                    <Box paddingLeft={3}>
                        <Typography>PLAYLIST</Typography>
                        <Typography variant='h1'>{playlist.title}</Typography>
                        <Typography>{playlist.description}</Typography>
                        <Box display={'flex'} width='250px' justifyContent={'space-between'}>
                            <Typography>{playlist.owner_name}</Typography>
                            <Typography>0 songs</Typography>
                            <Typography>0 hr 0 min</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mt={2}>
                <IconButton>
                    <PlayCircleFilled />
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} paddingTop={3} paddingLeft={5} width='1800px'>
                <Box display={'flex'}>
                    <Typography>#</Typography>
                    <Typography paddingLeft={3}>Title</Typography>
                </Box>
                <Typography>Album</Typography>
                <Typography>Date added</Typography>
                <Typography>Duration</Typography>
            </Box>
            <Box width='1850px' paddingLeft={3}>
                <hr color='grey' />
            </Box>
            <Box>
                {/* <Songs/> */}
            </Box>
        </>
    )
}

export default PlaylistContainer