import {  createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/ProductActions";

const initialState = {
    data : [],
    loading  : false,
    filterproduct : [],
    isAuth : false,
}


 const ProductSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
            filter(state,action){
                const  {  category , products }  = action.payload;
                console.log('cat|prod -',category,products);
                state.filterproduct = state.data.filter(obj => obj.category === action.payload.category);
                console.log('state data -',JSON.parse(JSON.stringify(state.filterproduct)));
            },
    
            filterbyPrice(state,action){
                    const {selectedPrice , products} = action.payload;
                    console.log('seleclted price -',selectedPrice);
                    if(selectedPrice === 'lowest'){
                        state.filterproduct = [...state.data].sort((a,b) => 
                        {
                                return a.price - b.price
                        });
                    }else if(selectedPrice === 'highest'){
                        state.filterproduct = [...state.data].sort((a,b) => 
                        {
                            return b.price - a.price
                        });
                    }
                    console.log('filter prod = ',JSON.parse(JSON.stringify(state.filterproduct)));
            }, 
    
            filterbyDiscount(state,action){
                const { discountvalue  }  = action.payload;
                if(discountvalue === '10'){         //  more than 10 
                    console.log('state data 1-',state.data);
                      state.filterproduct = [...state.data].filter((item) => 
                         Number(item.discountPercentage.toFixed()) > Number(discountvalue)
                        )
                      console.log('filter state 1-',state.filterproduct);
                }
            },
            // less than 
            filterbyDiscount1(state,action){
                const { discountvalue1 , nextcheckboxState }  = action.payload;
                
                if(nextcheckboxState && discountvalue1 === '10'){
                    state.filterproduct = [...state.data].filter((item) => 
                     Number(item.discountPercentage?.toFixed()) < Number(discountvalue1)
                    )
                    console.log('filter state 2-',state.filterproduct);
                }else{
                    state.filterproduct = state.data;
                }
            },
    
            clearFilter(state,action){
                const  { filtervalue  } = action.payload; 
                    console.log('filtervalue -',filtervalue); 
                     state.filterproduct = state.data;
            }
    
    },
    extraReducers : builder => builder
    .addCase(getAllProducts.pending   ,(state,action) => {
             state.loading = true;
    })
    .addCase(getAllProducts.fulfilled ,(state,action) => {
            state.loading = false
            state.data = action.payload;
            state.filterproduct = action.payload;
            state.isAuth = true;
    })
    .addCase(getAllProducts.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
})

export const { clearFilter , filterbyDiscount1 , filterbyDiscount  ,filterbyPrice ,filter } = ProductSlice.actions;
export default ProductSlice.reducer;
