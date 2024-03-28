import  { createSlice } from '@reduxjs/toolkit' ;
import { LoginUser, RegisterUser } from '../actions/UserActions';

const initialState = {
    loading  :false,
    error :  null,
    users :  []
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
             state.users = action.payload;
    })
     .addCase(RegisterUser.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
    .addCase(LoginUser.pending   ,(state,action) => {
            state.loading = true
     })
    .addCase(LoginUser.fulfilled ,(state,action) => {
             state.loading = false
             state.users = action.payload;
    })
     .addCase(LoginUser.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })
})

export  default UserSlice.reducer ;