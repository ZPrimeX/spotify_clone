import React from 'react'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import Player from './Player'

const Layout = ({ children }) => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main"
                    sx={{
                        flexGrow: 1, height: '100vh', background:
                            "linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,1) 0%, rgba(24,24,24,1) 53%, rgba(14,57,65,1) 100%)",
                    }}
                >{children}<Player /></Box>
            </Box>
        </>
    )
}

export default Layout