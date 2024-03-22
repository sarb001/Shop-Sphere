import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios' ;

// userData is argument = like name,email,pass as args 
export  const  RegisterUser = createAsyncThunk('api/register' , async(userData, { rejectWithValue } ) => {
    try {
            const response = await axios.post('api/register' , userData);
            console.log('response =',response);
            return response;
    } catch (error) {
            console.log('error =>',error);
            return rejectWithValue(error);
    }
});

export  const  LoginUser = createAsyncThunk('' , () => {
    try {
        
    } catch (error) {
        
    }
})
