import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//thunks: a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
// createAsyncThunk: returns a standard Redux thunk action creator
// create Slice: returns a single reducer along with the action creators for that reducer

import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
}

export const fetchContent  = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/photos')
        const data = await response.data
        return data
    }
)

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default contentSlice.reducer