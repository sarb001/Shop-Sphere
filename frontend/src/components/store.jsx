import  { configureStore } from '@reduxjs/toolkit' ;
import UserSlice from './slices/UserSlice';
import  ProductSlice from './slices/ProductSlice';

const reduxStore = configureStore({
    reducer : {
        user : UserSlice,
        products : ProductSlice
    }
})

export default reduxStore;