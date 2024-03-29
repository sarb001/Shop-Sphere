import React from 'react'
import CartProductCard from './CartProductCard';
import { NavLink } from 'react-router-dom' ;
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartitem = useSelector(state => state.cart.cartitems);
    console.log('carttem =',cartitem);

  return (
    <>
      <>
       <h2> Products in Cart  </h2>

        {cartitem?.length > 0 ? 

        <div style = {{display:'grid' , gridTemplateColumns:'1.6fr 0.4fr'}}>
                <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr' }}>
                    {cartitem?.map((data) => {
                            return (
                            <>
                            <CartProductCard  carditems = {data}  key = {data.id} />
                            </>
                            )
                        })}
                </div>

            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src= '/public/F-RqNytXAAEFtrI.jpg' alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"> New item </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">New Desc. </span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">   Total Quantity = 10 </a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> TotalPrice =  Rs.100 </a>
                </div>
                    <button> Pay Now </button>
            </div>
        </div>
                    : 
            <>
            <h5> No  Products Available </h5>  
            <button>  <NavLink to= '/'>Buy Products  </NavLink> </button>
            </>
    }
    </>
    </>
  )
}

export default Cart