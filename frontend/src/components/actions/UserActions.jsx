import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios' ;
import {  toast } from 'react-toastify' ;

// userData is argument = like name,email,pass as args 
export  const  RegisterUser = createAsyncThunk('api/register' , async(userData, { rejectWithValue } ) => {
    try {
            const response = await axios.post('api/register' , userData);
            console.log(' signup response =',response);
            toast.success(response.data.message);
            return true;
    } catch (error) {
            console.log('error =>',error);
            toast.error("Something  went Wrong");
            return rejectWithValue(error.response.data.message || "Something  went Wrong");
    }
});

export  const  LoginUser = createAsyncThunk('api/login' , async(userData , { rejectWithValue }) => {
    try {
        const response = await axios.post('api/login' , userData);
        // localStorage.setItem('logininfo' , JSON.stringify(response.data))
        console.log('login response =',response);
        toast.success(response.data.message);
        return response.data;
} catch (error) {
        console.log('error =>',error);
        toast.error("Something  went Wrong");
        return rejectWithValue(error.response.data.message || "Something  went Wrong");
}
})

export const LogoutUser = createAsyncThunk('api/logout' , async( userData  , { rejectWithValue }) => {
        try {
                        console.log('userdata logout =',userData);
                const response = await axios.get('api/logout' , userData);
                console.log('logout reponse =',response);
                toast.success(response.data.message);
                return true;
        } catch (error) {
                console.log('logout error =',error);
                return rejectWithValue(error.response.data.message || "Something  went Wrong");
        }
})

export const ProfileAuthentication = createAsyncThunk('api/profile' , async( userData  ,{ rejectWithValue }) => {
        try {
                const response = await axios.get('api/profile' , userData);
                console.log('response profile=',response);
                return response.data;
        } catch (error) {
                console.log('error = ',error);
                return rejectWithValue(error.response.data.message || "Something  went Wrong");
        }       
})

export const Checkout = createAsyncThunk('api/checkout' , async(userData  , { rejectWithValue }) => {
        try {
                console.log('checkout userdata =',userData);
                const { TotalPrice } = userData;
                // const  keydata   = await axios.get('api/paymentkey');
                // console.log('key= =',keydata.data?.key_id);

                // const  keyid = keydata.data?.key_id;

                console.log('order 11 1 =',TotalPrice);
                const response  = await axios.post('api/checkout', {TotalPrice});

                console.log('order ==',response);
        
        } catch (error) {
                console.log('error =',error);
                return rejectWithValue(error.response.data.message || "Something  went Wrong");
        }
})