import { Avatar, Box, Typography, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import Topbar from '../../components/Layout/Topbar'
import { UserContext } from '../../context/UserContext'

const ProfileContainer = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <Topbar />
            <Box display={'flex'} width='100%' height={'400px'} alignItems={'center'} bgcolor='red'>
                <Avatar sx={{ width: '200px', height: '200px' }} src={user.avatar} />
                <Box display={'flex'} flexDirection='column' ml={4}>
                    <Typography variant='h1'>{user.username}</Typography>
                    <Box display='flex' justifyContent={'space-between'}>
                        <Typography>3 Public Playlists</Typography>
                        <Typography>5 following</Typography>
                    </Box>

                </Box>
            </Box>
            <Box mt={5}>
                <Typography variant="h5">Top artists this month</Typography>
                <Typography>Only visible to you</Typography>
            </Box>
        </>
    )
}

export default ProfileContainer