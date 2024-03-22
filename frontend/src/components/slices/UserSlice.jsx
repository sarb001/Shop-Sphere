import  { createSlice } from '@reduxjs/toolkit' ;
import { RegisterUser } from '../actions/UserActions';

const initialState = {
    loading  :false,
    error :null,
    users : []
}


const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        
    },
    extraReducers : builder => builder
    .addCase(RegisterUser.pending   ,(state,action) => {
            state.loading = true
     })
    .addCase(RegisterUser.fulfilled ,(state,action) => {
             state.loading = false
             state.users.push(action.payload);
    })
     .addCase(RegisterUser.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
})

export  default UserSlice.reducer ;