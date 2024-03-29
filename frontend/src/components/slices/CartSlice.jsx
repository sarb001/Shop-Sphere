import   { createSlice } from '@reduxjs/toolkit' ;

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

        }
    },
    extraReducers  : (builder)  => {
    }
})

export const { add , remove } = CartSlice.actions
export default CartSlice.reducer;