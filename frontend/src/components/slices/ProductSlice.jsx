import {  createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/ProductActions";

const initialState = {
    data : [],
    loading  : false,
    isAuth : false,
}


 const ProductSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {

    },
    extraReducers : builder => builder
    .addCase(getAllProducts.pending   ,(state,action) => {
             state.loading = true;
    })
    .addCase(getAllProducts.fulfilled ,(state,action) => {
            state.loading = false
            console.log('state data 1 =',state.data);
            state.data = action.payload;
            console.log('state data 2=',state.data);
            state.isAuth = true;
    })
    .addCase(getAllProducts.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
})


export default ProductSlice.reducer;
