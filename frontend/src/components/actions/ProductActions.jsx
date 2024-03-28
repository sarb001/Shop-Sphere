import { createAsyncThunk } from '@reduxjs/toolkit' ;
import axios from 'axios';


export const getAllProducts = createAsyncThunk('/' ,async() => {
    try {

        const { data } = await axios.get('https://dummyjson.com/products');
        console.log(' data =',{data});
        const  result = data?.products;
        return result;

    } catch (error) {
        console.log('error =',error);
    }
   
})