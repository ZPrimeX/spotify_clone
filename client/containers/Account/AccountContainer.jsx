import { Box, Typography } from '@mui/material'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@mui/material';
import NextLink from 'next/link'


const drawerWidth = 220;
const AccountContainer = () => {
    return (
        <>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <Link component={NextLink} href='/account' underline='none' color={'white'}>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Account overview'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Box padding={10} display='flex' flexDirection={'column'}>
                <Typography variant='h3'>Account Overview</Typography>
                <Typography variant='h5' mt={2}>Profile</Typography>
                <Box mt={3} display='flex' flexDirection={'column'}>
                    <Typography>Username</Typography>
                    <Typography>Email</Typography>
                    <Typography>Date of birth</Typography>
                </Box>
            </Box>

        </>
    )
}

export default AccountContainer