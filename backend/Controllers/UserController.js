import User from "../models/User.js";
import jwt from  'jsonwebtoken' ;
import bcrypt from 'bcrypt' ;

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
            maxAge : new Date(Date.now() + 900000),
            path: '/'
        });

        const user = finduser;

        res.status(200).json({
            success : true,
            Token,
            user
        })

    } catch (error) {
            console.log('login error =',error);
    }   
}