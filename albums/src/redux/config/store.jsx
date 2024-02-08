import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "../slice/albumSlice";

export const store = configureStore({
    reducer: {
        album: albumSlice
    }
})
console.log(store.getState())