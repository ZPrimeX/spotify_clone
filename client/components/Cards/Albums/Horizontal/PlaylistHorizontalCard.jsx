import React, { useState } from 'react'
import {
    Link,
    Box,
    Avatar,
    Typography,
    IconButton,
} from '@mui/material'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const PlaylistHorizontalCard = ({ img, title, isActive }) => {
    const [showBtn, setShowBtn] = useState(false)
    return (
        <Link href="#" underline="none">
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
                        src="https://images.unsplash.com/photo-1658660854207-8886b1d69bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        variant="rounded"
                        sx={{ width: 80, height: '100%' }}
                    />
                    <Typography color='white'>Title</Typography>
                </Box>
                <IconButton sx={{ display: showBtn ? "block" : "none" }}><PlayCircleFilledIcon color="primary" sx={{ fontSize: 50 }} /></IconButton>
            </Box >
        </Link>
    )
}
export default PlaylistHorizontalCard