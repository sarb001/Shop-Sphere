import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true,
    },
    email : {
        type: String,
        required : [true,'Please Enter an Email'],
        unique : [true,'Email Already Exist']
    },
    password  : {
        type: String,
        required : [true,'Please Enter a Password'],
        unique : [true,'Password must be  atleast 6 characters '],
        select: false
    }
})

const User = mongoose.model('User',UserSchema);
export  default User;