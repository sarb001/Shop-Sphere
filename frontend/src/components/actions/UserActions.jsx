import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios' ;
import {  toast } from 'react-toastify' ;

// userData is argument = like name,email,pass as args 
export  const  RegisterUser = createAsyncThunk('api/register' , async(userData, { rejectWithValue } ) => {
    try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/register` , {
                    headers : {
                            'Content-Type' :'application/json'
                        },
                withCredentials :true,
                params:userData,
            });
            console.log(' signup response =',response);
            toast.success(response.data.message);
            return true;
    } catch (error) {
            console.log('error =>',error);
            toast.error("Something  went Wrong");
            return rejectWithValue(error.response.data.message || "Something  went Wrong");
    }
});

export  const  LoginUser = createAsyncThunk(`api/login`, async(userData , { rejectWithValue }) => {
    try {       
        console.log('userdata login =',userData);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login` ,userData,
        {
                withCredentials :true
        });
        console.log('login response =',response);
        toast.success(response.data.message);
        return response.data;
} catch (error) {
        console.log('error =>',error);
        toast.error("Something  went Wrong");
        return rejectWithValue(error.response.data.message || "Something  went Wrong");
}
})

export const LogoutUser = createAsyncThunk(`api/logout` , async( userData  , { rejectWithValue }) => {
        try {
                        console.log('userdata logout =',userData);
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/logout` , {
                        headers : {
                                'Content-Type' : 'application/json',
                        },
                        withCredentials: true,
                        params: userData
                });
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
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile` , {
                        headers : {
                                'Content-Type' : 'application/json',
                        },
                        withCredentials: true,
                        params: userData
                });
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

                const  keydata   = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/paymentkey`, {
                        headers: {
                                'Content-Type' : 'application/json'
                        },
                        withCredentials :true
                });
                console.log('key= =',keydata.data?.key_id);

                const  keyid = keydata.data?.key_id;

                console.log('order 11 1 =',TotalPrice);
                const response  = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout`, { TotalPrice } , {
                        headers : {
                                'Content-Type' : 'application/json'
                        },
                        withCredentials :true,
                });
                const orderamount = response.data.order.amount;
                const orderid = response.data.order.id;
                console.log('order ==',orderamount);
                console.log('order ==',orderid);

                const options = {
                        key: keyid,
                        amount: orderamount,
                        currency: "INR",
                        name: "My E-Commarce",
                        description: "Test Transaction",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU",
                        order_id: orderid,
                        callback_url: `${import.meta.env.VITE_BACKEND_URL}/api/paymentverification`,
                        prefill: {
                            name: "Abhi Sucks",
                            email: "abhi.sucks@example.com",
                            contact: "7807897890"
                        },
                        notes: {
                            "address": "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#3399cc"
                        }
                };

                const razor = new window.Razorpay(options);
                    razor.open();
                    return true
        
        } catch (error) {
                console.log('error =',error);
                return rejectWithValue(error.response.data.message || "Something  went Wrong");
        }
})