import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../actions/UserActions';
import { toast } from 'react-toastify' ;

const Register = () => {

  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');

  const dispatch =  useDispatch();
  const navigate =  useNavigate();

  const { loading ,  error  } = useSelector(state => state.user);

   const HandleRegistration = async(e) => {
      e.preventDefault();
      console.log('fname =',name);
      console.log('email =',email);
      console.log('password =',password);
      await dispatch(RegisterUser({name,email,password}));
      navigate('/login');
   }

  return (
    <div className='flex justify-center mt-28'>
   
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

        <form class="space-y-6"  onSubmit={HandleRegistration}>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>


            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" 
                value = {email}   onChange={(e) => setemail(e.target.value)}
                required />
            </div>
            
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>

                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder='Johny'  value = {name} 
                onChange = {(e) => setname(e.target.value)}
                required />
            </div>

            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder='********'  
                value = {password}  onChange={(e) => setpassword(e.target.value)}
                required />
            </div>

                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {loading ? "Creating... " : "Create an Account "}
              </button>

            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?
                <NavLink to ="/login" class="text-blue-700 hover:underline dark:text-blue-500">   Login Here </NavLink>
              
            </div>
        </form>

      </div>

    </div>
  )
}

export default Register