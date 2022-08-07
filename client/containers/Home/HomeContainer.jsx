import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import VerticalColumn from '../../components/Cards/Albums/Vertical/VerticalColumn';
import HorizontalColumn from '../../components/Cards/Albums/Horizontal/HorizontalColumn'
import Topbar from '../../components/Layout/Topbar';
import axios from 'axios';

const HomeContainer = () => {
    const [playlists, setPlaylists] = useState([])

    const fetchPlaylists = async () => {
        const res = await axios.get('/api/playlist')
        if (res.data.message === 'success') {
            setPlaylists(res.data.body)
        }
    }

    useEffect(() => {
        fetchPlaylists()
    }, [])


    return (
        <>
            <Topbar />
            <Box mt={'50px'} width={'87%'} mb={20} padding={5}>
                <HorizontalColumn data={playlists} />
                <VerticalColumn />
                <VerticalColumn />
                <VerticalColumn />
            </Box>
        </>
    )
}

export default HomeContainer