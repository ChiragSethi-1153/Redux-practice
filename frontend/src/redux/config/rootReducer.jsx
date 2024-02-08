import { combineReducers } from "@reduxjs/toolkit"
import contentSlice from "../slice/contentSlice"
import dataSlice from "../slice/dataSlice"

const rootReducer = combineReducers({
    content: contentSlice,
    data: dataSlice,
}
)
export default rootReducer