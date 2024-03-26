import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios' ;
import {  toast } from 'react-toastify' ;

// userData is argument = like name,email,pass as args 
export  const  RegisterUser = createAsyncThunk('api/register' , async(userData, { rejectWithValue } ) => {
    try {
            const response = await axios.post('api/register' , userData);
            console.log('response =',response);
            toast.success(response.data.message);
            return true;
    } catch (error) {
            console.log('error =>',error);
            toast.error("Something  went Wrong");
            return rejectWithValue(error.response.data.message || "Something  went Wrong");
    }
});

export  const  LoginUser = createAsyncThunk('' , () => {
    try {
        
    } catch (error) {
        
    }
})
