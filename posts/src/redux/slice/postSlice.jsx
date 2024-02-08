//

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () =>{
    const response = await axios('https://jsonplaceholder.typicode.com/posts')
    const data = response.data
    return data
})

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        content: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})


export default postSlice.reducer