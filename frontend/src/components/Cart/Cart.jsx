import React from 'react'
import CartProductCard from './CartProductCard';
import { NavLink } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux';
import { Checkout } from '../actions/UserActions';

const Cart = () => {

   const  cartitems = useSelector(state => state.cart?.cartitem);
   console.log('cart Products- ',cartitems);

    const TotalQuantity = cartitems?.reduce((acc,cur) =>  acc + cur.quantity , 0);
    console.log('totalquantity =',TotalQuantity);

    const TotalPrice = cartitems?.reduce((acc,cur) => acc + cur.price * cur.quantity ,0);
    console.log('totalPrice =',TotalPrice);

    const dispatch = useDispatch();

   const handlepayment =  async() => {
    console.log('pyment handled=');
      await dispatch(Checkout({TotalPrice}));
   }

  return (
    <>
      <div className='px-12 my-6'>

        {cartitems?.length > 0 ? 

        <div style = {{display:'grid' , gridTemplateRows :'1.6fr 0.4fr'}}>
                <div className='flex flex-wrap'>
                    {cartitems?.map((data) => {
                            return (
                            <>
                            <CartProductCard  carditems = {data}  key = {data.id} />
                            </>
                            )
                        })}
                </div>

        <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src= '/F-RqNytXAAEFtrI.jpg' alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"> New item </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">New Desc. </span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">   Total Quantity = {TotalQuantity} </a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> TotalPrice =  Rs.{TotalPrice} </a>
                </div>
                    <button  onClick={handlepayment}> Pay Now </button>
          </div>
        </div>
                    : 
            <>
            <h5> No  Products Available </h5>  
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">  <NavLink to= '/shop'>Buy Products  </NavLink> </button>
            </>
    }
    </div>
    </>
  )
}

export default Cart