import User from "../models/User.js";
import jwt from  'jsonwebtoken' ;
import bcrypt from 'bcrypt' ;
import Razorpay from 'razorpay' ;
import Payment from '../models/Payment.js' ;
import crypto from 'crypto' ;

export const RegisterUser = async(req,res) => {
    try {
        const {  name , email , password  } = req.body;
        if(!name || !email || !password){
            return res.status(404).json({
                 success : false,
                 message : " Fill All Fields "
            })
        }

        const user = await User.create({name,email,password});
        console.log('user created =',user);

        await user.save();

        res.status(201).json({
             success : true,
             message: " User Created Successfully ",
             user
        })

    } catch (error) {
            console.log('registering error  =',error);
    }   
}

export const LoginUser = async(req,res) => {
    try {
        const { email ,password } =  req.body;
        
        if(!email  ||!password){
            return res.status(404).json({
                success : false,
                message : " Fill All Fields "
           })
        }

        const finduser = await User.findOne({email});
        
        if(!finduser){
            return res.status(401).json({
                message : " User Invalid "
            })
        }
        
        console.log('user find ==',finduser);
            // password from user taken 
        console.log('plain pass =',password);

        console.log('hash pass =',finduser.password);

        const  PasswordMatch =  await bcrypt.compare(password ,finduser.password);
        console.log('password Matched =',PasswordMatch);

        if(!PasswordMatch){
            return res.status(400).json({
                success : false,
                message : " Password not Matched "
            })
        }

        // user founded = existed
        // token generation
        // const Token = await finduser.generateToken(finduser._id);

        const Token =   jwt.sign({_id : finduser._id},  process.env.TOKEN );

        console.log('token generated =',Token);

        res.cookie('jwtToken' ,Token , {
            sameSite : 'None',
            httpOnly : true,
            secure   : true,
            maxAge : 1000 * 60 * 60 * 24 * 7,
            expires : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
        });

        const user = finduser;

        res.status(200).json({
            success : true,
            Token,
            message: " User LoggedIn Successfully ",
            user
        })

    } catch (error) {
            console.log('login error =',error);
    }   
}

export const Profile = async(req,res) => {
    try {
        console.log('Profile Accessed  ==',req.user);
        const userProfile = await req.user;

        res.status(200).json({
            success : true,
            message: " User Profile Founded ",
            userProfile
        })
    } catch (error) {
        console.log('error =',error);
    }
}

export const LogoutUser = async(req,res) => {
    try { 
            res.clearCookie('jwtToken' , {
                 httpOnly : true,
                 sameSite : 'None',
                 secure : true,
            });
            return res.status(200).json({
                success : true,
                message  : " User Logged Out "
            })
    } catch (error) {
        console.log('error =',error);
    }
}

export const GetKey = async(req,res) => {
    try {
            res.json({
                key_id : process.env.RAZORPAY_KEY_ID
            })
    } catch (error) {   
        console.log('error =',error);
    }
}


export const Checkout = async(req,res) => {
    try {
            const instance = new Razorpay({
                key_id : process.env.RAZORPAY_KEY_ID,
                key_secret : process.env.RAZORPAY_KEY_SECRET,
            })
            const options = {
                amount : Number(req.body.TotalPrice * 100),
                currency : 'INR'
            }
            const order = await instance.orders.create(options);
            res.status(200).json({
                success : true,
                order,
            })

    } catch (error) {
        console.log('error =',error);
    }   
}


export const PaymentVerification = async(req,res) => {
    console.log('inside payment verification ==');
    try {
        const { razorpay_order_id  , razorpay_payment_id , razorpay_signature } = req.body;
        console.log('fetching 3=', razorpay_order_id  , razorpay_payment_id , razorpay_signature );

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        console.log('body in verf =',body);

        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;
    console.log('isAuthentic =',isAuthentic);

    if (isAuthentic) {

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });
        console.log('before redir =');
        res.redirect(
            `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
            );
        console.log('after redir =');
    } else {
        res.status(400).json({
            success: false,
        });
    }
    
    } catch (error) {
            console.log('payment verf. -',error);
    }   
}