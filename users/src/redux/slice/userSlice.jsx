import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    return data
})

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: true,
        error: null,
        content: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default userSlice.reducer