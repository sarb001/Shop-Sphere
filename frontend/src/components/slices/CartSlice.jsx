import   { createSlice } from '@reduxjs/toolkit' ;
import { Checkout } from '../actions/UserActions';

const initialState = {
    cartitem : [],
    quantity : 1
}

export const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        
        add(state,action){
            const { data , quantity} = action.payload;
            console.log('add data =',data);
            console.log('add qty= ',quantity);

            const updatedData = {...data, quantity : 1}
            state.cartitem.push(updatedData);
        },

        remove(state,action){
            const { id } = action.payload;
            console.log('remove slice =',id);
            state.quantity = state.quantity - 1; 
            state.cartitem = state.cartitem.filter((item) => item.id !== id);
        },

        incrementproduct(state,action){
            const { carditems, quantity } = action.payload;
            console.log('maindataid =',carditems);
            const findproduct = state.cartitem.find(item => item.id === carditems?.id);

            console.log('findproduct ====',JSON.stringify(findproduct));

            findproduct.quantity = findproduct.quantity + 1;
        },

        decrementproduct(state,action){
            const { carditems, quantity } = action.payload;
            console.log('maindataid =',carditems);
            const findproduct = state.cartitem.find(item => item.id === carditems?.id);
            console.log('findproduct ====',JSON.stringify(findproduct));
            findproduct.quantity = findproduct.quantity - 1;
        }
    },
    extraReducers : builder => builder
    .addCase(Checkout.pending   ,(state,action) => {
             state.loading = true;
    })
    .addCase(Checkout.fulfilled ,(state,action) => {
            state.loading = false;
            state.isAuth = true;
            state.checked = true;
    })
    .addCase(Checkout.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
})

export const { add , remove , incrementproduct , decrementproduct } = CartSlice.actions
export default CartSlice.reducer;