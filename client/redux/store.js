import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./features/playlistSlice";


export const store = configureStore({
    reducer: {
        playlist: playlistSlice
    },
})