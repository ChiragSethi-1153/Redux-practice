import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



export const fetchComments = createAsyncThunk('comments/fetchComments', async (content) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/post/${content}/comments`)
    const data = response.data
    // console.log(data)

    return {data: data, id: content}
})

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        isLoading: false,
        error: null,
        content: []
    },
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false
            state.content[action.payload.id] = action.payload.data
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })

    }
})

export default commentSlice.reducer