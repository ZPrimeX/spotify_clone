import React from 'react';
import {
    Card,
    Link,
    CardActionArea,
    Avatar,
    Typography,
    CardContent
} from '@mui/material';

const PlaylistVerticalCard = ({ img, title, isActive }) => {
    return (
        <Link href="#" underline="none">
            <Card sx={{ width: 190, maxHeight: 275 }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: "left" }}>
                    <Avatar
                        src="https://images.unsplash.com/photo-1658660854207-8886b1d69bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                        variant="rounded"
                        sx={{ width: 150, height: 150, mt: 2 }}
                    />
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