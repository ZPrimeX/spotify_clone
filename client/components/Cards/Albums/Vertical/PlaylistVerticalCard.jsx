import React, { useContext, useState } from 'react';
import {
    Card,
    Link,
    CardActionArea,
    Avatar,
    Typography,
    CardContent,
    IconButton
} from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import NextLink from 'next/link';
import { UserContext } from '../../../../context/UserContext';


const PlaylistVerticalCard = ({ img, title, isActive }) => {
    const [showBtn, setShowBtn] = useState(false)
    const { isAuth } = useContext(UserContext)
    return (
        <Link component={NextLink} href={isAuth === true ? "/playlist" : "/login"} underline="none">
            <Card sx={{ width: 190, maxHeight: 275 }}
                onMouseOver={() => setShowBtn(true)}
                onMouseLeave={() => setShowBtn(false)}>
                <CardActionArea>
                    <Avatar
                        src="https://images.unsplash.com/photo-1658660854207-8886b1d69bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        variant="rounded"
                        sx={{ width: 150, height: 150, m: '12px auto', mt: 2 }}
                    />
                    {showBtn ?
                        (<IconButton sx={{ display: showBtn ? "block" : "none", position: "absolute", bottom: 95, right: 12 }}><PlayCircleFilledIcon color="primary" sx={{ fontSize: 50 }} /></IconButton>) : ('')}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Artist
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link >
    );
}

export default PlaylistVerticalCard