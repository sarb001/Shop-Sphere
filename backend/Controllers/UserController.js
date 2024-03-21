import User from "../models/User.js";


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
        
    } catch (error) {
        
    }
}