import  { createSlice } from '@reduxjs/toolkit' ;
import { LoginUser, LogoutUser, ProfileAuthentication, RegisterUser } from '../actions/UserActions';

const initialState = {
    loading  :false,
    error :  null,
    users :  [],
    isAuth : false,
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
             state.isAuth  = true;
     })
    .addCase(LoginUser.rejected ,(state,action) => {
             state.loading = false
             state.error = action.payload
     })

     .addCase(LogoutUser.pending  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
     })
    .addCase(LogoutUser.fulfilled ,(state,action) => {
             state.loading = false
             state.users = null;
             state.isAuth = false;    // user logged so auth will be false                      
     })
    .addCase(LogoutUser.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
    })

    .addCase(ProfileAuthentication.pending   ,(state,action) => {
            state.loading = true;
            state.isAuth = false
     })
    .addCase(ProfileAuthentication.fulfilled ,(state,action) => {
             state.loading = false
             state.users = action.payload;
             state.isAuth = true
    })
     .addCase(ProfileAuthentication.rejected  ,(state,action) => {
            state.loading = false
            state.error  = action.payload
            state.isAuth = false
    })
})

export  default UserSlice.reducer ;