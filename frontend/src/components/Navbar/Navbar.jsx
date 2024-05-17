import React, { useEffect, useState } from 'react'
import {  NavLink ,useNavigate } from 'react-router-dom' ;
import { useDispatch, useSelector  } from 'react-redux' ;
import { LogoutUser, ProfileAuthentication } from '../actions/UserActions';
import { PiSunDimFill } from "react-icons/pi";

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const LogoutHandler = async(e) => {
        e.preventDefault();
        console.log('user logged out ');
        await  dispatch(LogoutUser());   
        navigate('/'); 
    }


    const { isAuth , loading , users } = useSelector(state => state.user);
    console.log('main auth =',isAuth);
    console.log('users main ',users);
  
    const cartProducts = useSelector(state => state?.cart?.cartitem);
    console.log('products =',cartProducts);

   const TotalQuantity = cartProducts?.reduce((acc,cur) =>  acc + cur.quantity , 0);
    console.log('totalquantity =',TotalQuantity);

     useEffect(() => {
        dispatch(ProfileAuthentication())
     },[dispatch])

     
    const [darkmode,setdarkmode] = useState(false);

    const handleDarkMode = () => {
        setdarkmode(!darkmode);
    }


  return (
    < >
        <nav className ="bg-black text-white lg:fixed lg:top-0">

             <div class="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
                    <div>
                         <NavLink to = "/">  ShopSphere  </NavLink> 
                    </div>

                    <div className='flex justify-end'>
                        <button data-collapse-toggle="navbar-default" type="button" className  ="fixed right-[13px] top-[11px]  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                <div className ="hidden w-full md:block md:w-auto" id="navbar-default">

                    <ul className = "absolute right-0  md:relative font-medium flex flex-col p-4 md:p-0 mt-6 md:mt-0 border  md:flex-row  bg-black text-white   md:space-x-8 rtl:space-x-reverse  md:border-0 ">
                      
                        <li>
                            <a href = "/product" class="block py-2 px-3   rounded  md:p-0" aria-current="page">
                                Shop
                            </a>
                        </li>

                        <li>
                            <a href="/cart" class="block  py-2 px-3  md:p-0 ">
                                Cart
                            </a>
                        </li>

                        <li>
                             <div className='block pl-2.5 text-[20px]' onClick = {handleDarkMode}  > 
                               {/* {darkmode ? "dark" : "light"} */}
                               <PiSunDimFill />
                             </div> 
                        </li>

                        <li>
                             {isAuth ?
                                <a onClick = {LogoutHandler}  class="block py-4 px-3 md:border-0  md:p-0 cursor-pointer hover:bg-white  hover:text-black ">
                                {loading ? "...." : "Logout"}
                                </a>
                             :
                                <a href="/login" class="block py-2 px-3  md:border-0 md:p-0 cursor-pointer hover:bg-white  hover:text-black p-2">
                                Login
                                </a> 
                             }
                        
                        </li>
                    </ul>

                </div>
            </div>
            </nav>

    </>
  )
}

export default Navbar

