import React, { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import LayersIcon from '@mui/icons-material/Layers';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, Stack } from '@mui/material';
import { UserContext } from '../../context/UserContext';
import NextLink from 'next/link'
import { usePlaylist } from '../../../client/core/hooks/usePlaylist'
import { useRouter } from 'next/router';
const drawerWidth = 210;

const Sidebar = () => {
    const { isAuth } = useContext(UserContext)
    const { handleCreate } = usePlaylist()
    const router = useRouter()
    const handleRedirect = () => {
        router.push('/login')
    }
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
                    <Link component={NextLink} href='/' underline='none' color={'white'}>
                        <ListItem disablePadding>

                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link component={NextLink} href='/search' underline='none' color={'white'}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Search'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link component={NextLink} href={isAuth === true ? "/playlist" : "/login"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LayersIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Your library'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Stack mt={'30px'}>
                        <Link underline='none' color={'white'}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={isAuth === true ? handleCreate : handleRedirect}>
                                    <ListItemIcon>
                                        <PlaylistAddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Create Playlist'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link component={NextLink} href={isAuth === true ? "/liked_songs" : "/login"}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FavoriteIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Liked Songs'} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </Stack>
                </List>
                <Divider />
                {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
        </>
    );
}

export default Sidebar