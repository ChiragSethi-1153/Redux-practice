import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
// creates a store but can also accept reducer 
// functions as arguments and automatically sets 
// up the Redux DevTools Extension for easy debugging

// import contentSlice from '../slice/contentSlice'

// export const store = configureStore({
//     reducer: {
//         content: contentSlice,
//     }
// })



// export const store = configureStore({
//   reducer: {
//     content: contentSlice,
//   },
// })
export const store = configureStore({
    reducer: rootReducer
})