import React, { useContext, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Popover, Avatar, ListItemText, ListItemButton, Typography, Button, Link } from '@mui/material';
import { useRouter } from 'next/router';
import { UserContext } from '../../context/UserContext';
import NextLink from 'next/link';


const Topbar = () => {
    const { isAuth, user } = useContext(UserContext)
    const router = useRouter()
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
            <Box display={'flex'} justifyContent='space-between' pt={2}>
                <Box display='flex' alignItems={'center'}>
                    <IconButton><ArrowBackIosNewIcon /></IconButton>
                    <IconButton><ArrowForwardIosIcon /></IconButton>
                    {router.pathname === '/search' ? <Box ml={2}>
                        <input></input>
                    </Box> : ""}
                </Box>
                {isAuth === true ? <><Box aria-describedby={id} variant="contained" onClick={handleClick} sx={{
                    borderRadius: 30,
                    minWidth: 165,
                    height: 30,
                    backgroundColor: '#181818',
                    cursor: 'pointer'
                }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                            sx={{ width: 27, height: 27, ml: 0.4, mt: 0.2 }}
                            alt="Avatar"
                            src={user.avatar} />
                        <Typography ml={1} color='white'>{user.username}</Typography>
                    </Box>
                </Box><Popover
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
                >       <Link component={NextLink} href='/account'>
                            <ListItemButton component="a" sx={{ width: 190 }}>
                                <ListItemText primary="Account" />
                            </ListItemButton>
                        </Link>
                        <Link component={NextLink} href='/profile'>
                            <ListItemButton component="a">
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </Link>
                        <ListItemButton component="a" href="#">
                            <ListItemText primary="Log out" />
                        </ListItemButton>
                    </Popover></> :
                    <Box>
                        <Link component={NextLink} href='/signup'>
                            <Button variant='text' size='large' color='whitebutton'>Sign up</Button>
                        </Link>
                        <Link component={NextLink} href='/login'>
                            <Button variant='contained' size='large' color="whitebutton" sx={{ borderRadius: '50px', color: "black" }}>Log in</Button>
                        </Link>
                    </Box>}
            </Box>
        </>
    )
}

export default Topbar