import React, { useState, useContext } from 'react'
import {
    Link,
    Box,
    Avatar,
    Typography,
    IconButton,
} from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import NextLink from 'next/link'
import { UserContext } from '../../../../context/UserContext';


const PlaylistHorizontalCard = ({ img, title, isActive }) => {
    const [showBtn, setShowBtn] = useState(false)
    const { isAuth } = useContext(UserContext)
    return (
        <Link component={NextLink} href={isAuth === true ? "/playlist" : "/login"} underline="none">
            <Box
                width={'90%'}
                height={'75px'}
                bgcolor="rgba(255,255,255,0.1)"
                borderRadius={'5px'}
                alignItems='center'
                justifyContent={'space-between'}
                display={'flex'}
                sx={{
                    '&:hover': {
                        backgroundColor: 'light-grey',
                        opacity: [0.9, 0.8, 0.7],
                    }
                }}
                onMouseOver={() => setShowBtn(true)}
                onMouseLeave={() => setShowBtn(false)}
            >
                <Box display={'flex'} alignItems='center' gap={'15px'} height={'100%'}>
                    <Avatar
                        src={img}
                        variant="rounded"
                        sx={{ width: 80, height: '100%' }}
                    />
                    <Typography color='white'>{title}</Typography>
                </Box>
                <IconButton sx={{ display: showBtn ? "block" : "none" }}><PlayCircleFilledIcon color="primary" sx={{ fontSize: 50 }} /></IconButton>
            </Box >
        </Link>
    )
}
export default PlaylistHorizontalCard