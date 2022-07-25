import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Popover, Button, Avatar, ListItemText, ListItemButton, Typography } from '@mui/material';


const Topbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Box display={'flex'} justifyContent='space-between'>
                <Box>
                    <IconButton><ArrowBackIosNewIcon /></IconButton>
                    <IconButton><ArrowForwardIosIcon /></IconButton>
                </Box>
                <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{
                    borderRadius: 30, minWidth: 165, height: 25,
                    backgroundColor: '#000000',
                }} >
                    <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                            sx={{ width: 24, height: 24 }}
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1658660854207-8886b1d69bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" />
                        <Typography ml={1} color='white'>Username</Typography>
                    </Box>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ mt: 1 }}
                >
                    <ListItemButton component="a" href="#" sx={{ width: 190 }}>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                    <ListItemButton component="a" href="#">
                        <ListItemText primary="Log out" />
                    </ListItemButton>
                </Popover>
            </Box>
        </>
    )
}

export default Topbar