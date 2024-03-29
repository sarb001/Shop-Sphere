import  { configureStore } from '@reduxjs/toolkit' ;
import UserSlice from './slices/UserSlice';
import  ProductSlice from './slices/ProductSlice';
import CartSlice from './slices/CartSlice';

const reduxStore = configureStore({
    reducer : {
        user : UserSlice,
        products : ProductSlice,
        cart : CartSlice 
    }
})

export default reduxStore;