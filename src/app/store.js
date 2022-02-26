import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import testApiReducer from "../features/testApi/testApiSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        testApi: testApiReducer
    }
})