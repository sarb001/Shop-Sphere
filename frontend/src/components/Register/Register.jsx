import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {

  const [fname,setfname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

   const HandleRegistration = () => {

   }

  return (
    <>
   <div className=' m-8 md:flex  md:justify-center md:h-[70vh] text-black'>
         <div className=' w-full p-8  bg-[rgb(33,47,67)] md:bg-lime-400   
          md:grid md:justify-normal md:max-w-[30rem] text-xl'>

            <div className="account sm:text-center "> 
             <span className='text-2xl sm:text-3xl'> Create an Account </span>
            </div>

            <div className='grid sm:grid'>

                <form onSubmit={HandleRegistration}>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Name </label>
                    <input type = "text"  placeholder='Johny'  value = {fname} 
                    onChange = {(e) => setfname(e.target.value)}
                    required/>
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Email </label>
                    <input type = "email"  placeholder='johndoe@gmail' value = {email} 
                    onChange = {(e) => setemail(e.target.value)}
                    required/>
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Password </label>
                    <input type = "password"  placeholder='*******' value = {password}
                    onChange = {(e) => setpassword(e.target.value)}
                    required/>
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <input type = "checkbox"  required/>
                    <span className='text-[18px]'> I accept the Terms and Conditions </span>
                  </div>
            
                    <div className='sm:text-center'>
                      <button className='p-2 bg-slate-900 text-white'> 
                       {/* {loading ? "Creating... " : "Create an Account "} */}
                          Create An Account 
                      </button>
                    </div>
                  
                </form>

                <div className='sm:text-center'>
                  <span className='text-[18px]'>  
                    <NavLink  to = "/login" > Already have an account? Login Here </NavLink>
                  </span>
                </div>

           </div>

         </div>
    </div>
    </>
  )
}

export default Register