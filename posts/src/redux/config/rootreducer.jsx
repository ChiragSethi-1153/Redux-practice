import { combineReducers } from "@reduxjs/toolkit"
import commentSlice from "../slice/commentSlice"
import postSlice from "../slice/postSlice"

const rootReducer = combineReducers({
    comment: commentSlice,
    post: postSlice,
}
)
export default rootReducer