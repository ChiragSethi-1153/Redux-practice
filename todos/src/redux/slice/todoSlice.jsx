// https://jsonplaceholder.typicode.com/todos

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () =>{
    const response = await axios('https://jsonplaceholder.typicode.com/todos')
    const data = response.data
    return data
})

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        isLoading: false,
        content: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default todoSlice.reducer