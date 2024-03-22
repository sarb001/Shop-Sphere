import  { configureStore } from '@reduxjs/toolkit' ;
import UserSlice from './slices/UserSlice';

const reduxStore = configureStore({
    reducer : {
        user : UserSlice,
    }
})

export default reduxStore;