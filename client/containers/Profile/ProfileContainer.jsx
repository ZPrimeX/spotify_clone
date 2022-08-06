import { Avatar, Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Topbar from '../../components/Layout/Topbar'
import { UserContext } from '../../context/UserContext'
import UpdateProfileModal from './components/UpdateProfileModal'

const ProfileContainer = () => {
    const { user, username, setUsername } = useContext(UserContext)
    return (
        <>
            <Topbar />
            <Box display={'flex'} width='100%' height={'400px'} alignItems={'center'}>
                <UpdateProfileModal>
                    <Avatar sx={{ width: '200px', height: '200px', cursor: 'pointer' }} src={user.avatar} />
                </UpdateProfileModal>
                <Box display={'flex'} flexDirection='column' ml={4}>
                    <UpdateProfileModal>
                        <Typography variant='h1' fontWeight={700} sx={{ cursor: 'pointer' }}>{user.username}</Typography>
                    </UpdateProfileModal>
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