import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Sidebar from '../../components/Layout/Sidebar'
import Topbar from '../../components/Layout/Topbar';
import UpdateAccountModal from './UpdateAccountModal';

const AccountContainer = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            <Sidebar />
            <Topbar />
            <Box padding={10} display='flex' flexDirection={'column'} paddingLeft={100}>
                <Typography variant='h3' fontWeight={700}>Account Overview</Typography>
                <Box display='flex' flexDirection={'row'} alignItems='center' justifyContent={'space-between'} width='500px'>
                    <Box mt={5} display='flex' flexDirection={'column'} gap={2}>
                        <Typography fontWeight={700} fontSize={20}>Username</Typography>
                        <Typography fontWeight={700} fontSize={20}>Email</Typography>
                        <Typography fontWeight={700} fontSize={20}>Date of birth</Typography>
                        <Typography fontWeight={700} fontSize={20}>Country or region</Typography>
                    </Box>
                    <Box mt={5} display='flex' flexDirection={'column'} gap={2}>
                        <Typography fontWeight={500} fontSize={18}>{user.username}</Typography>
                        <Typography fontWeight={500} fontSize={18}>{user.email}</Typography>
                        <Typography fontWeight={500} fontSize={18}>to be added</Typography>
                        <Typography fontWeight={500} fontSize={18}>to be added</Typography>
                    </Box>
                </Box>
                <UpdateAccountModal>
                    <Button variant='contained' sx={{ width: '150px', mt: 3 }}>Edit profile</Button>
                </UpdateAccountModal>
            </Box>
        </>
    )
}

export default AccountContainer