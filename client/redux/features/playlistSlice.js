import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPlaylists = createAsyncThunk("playlist/fetchUserPlaylists", async (token) => {
    const res = await axios.get('/api/playlist/user-playlist', { headers: { Authorization: `Bearer ` + token } })
    return res.data
})

const playlistSlice = createSlice({
    name: "playlist",
    initialState: {
        status: 'idle',
        data: [],
        short: []
    },
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchUserPlaylists.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserPlaylists.fulfilled, (state, action) => {
                state.status = 'success'
                state.data = action.payload.body
                state.short = action.payload.body.slice(0, 6)
            })
            .addCase(fetchUserPlaylists.rejected, (state) => {
                state.status = 'fail'
            });
    }
})

export default playlistSlice.reducer

export const selectPlaylistData = (state) => state.playlist.data
export const selectPlaylistStatus = (state) => state.playlist.status
export const selectPlaylistShort = (state) => state.playlist.short