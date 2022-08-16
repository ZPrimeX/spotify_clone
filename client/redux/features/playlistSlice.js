import { createSlice } from "@reduxjs/toolkit";


const playlistSlice = createSlice({
    name: "Playlist",
    initialState: {
        status: 'idle',
        data: []
    },
    reducers: {},
})

export default playlistSlice.reducer