import mongoose from "mongoose";
import bcrypt from 'bcrypt' ;
import jwt from 'jsonwebtoken';

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
        // select: false
    }
})

UserSchema.pre('save' , async function(next){
    if(this.isModified("password")){
         this.password = await bcrypt.hash(this.password,10);
    }
    next();
})


const User = mongoose.model('User',UserSchema);
export  default User;