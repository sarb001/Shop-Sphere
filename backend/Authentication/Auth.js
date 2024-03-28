import jwt from 'jsonwebtoken' ; 
import User from '../models/User.js';

export const VerifyAuth = async(req,res,next) => {
    console.log('starting authe =');
    try {
         console.log('cookies =',req.cookies);
        const  { jwtToken } = await req.cookies;
        const token = jwtToken;
        console.log('token recieved  =',token);

        if(!token){
            return res.status(401).json({
                message : "Token Not Present"
            })
        }

        console.log('Process TOKEN =',process.env.TOKEN);
        const Decoded  =  jwt.verify(token, process.env.TOKEN);
        console.log('Decoded =',Decoded);

        req.user = await User.findById(Decoded?._id);
        next();

    } catch (error) {
        console.log('error =',error);
        return res.status(404).json({
             success : false,
             message : " Authentication Failed "
        })
    }
}