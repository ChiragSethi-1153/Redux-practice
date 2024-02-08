// https://jsonplaceholder.typicode.com/albums

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums' , async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/albums')
    const data = await response.data
    return data
    
})


export const albumSlice = createSlice({
    name: 'albums',
    initialState: {
        isLoading: false,
        contents: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.isLoading=true
    })
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
})

export default albumSlice.reducer