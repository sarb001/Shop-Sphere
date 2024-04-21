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
      <div className='px-12 my-6 text-center'>

        {cartitems?.length > 0 ? 

      <div  className = 'grid grid-rows-[1.6fr,0.4fr] lg:grid-cols-2'>
                
                  <div className='flex flex-wrap justify-evenly '>
                      {cartitems?.map((data) => {
                              return (
                              <>
                              <CartProductCard  carditems = {data}  key = {data.id} />
                              </>
                              )
                          })}
                  </div>

                  <div class="flex flex-col items-center pb-10  lg:sticky lg:top-[100px]">
    
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        
                        <div>
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> Price Details </h5>
                        </div>

                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        Total Quantity = {TotalQuantity} 
                        </p>

                        <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                          TotalPrice =  Rs.{TotalPrice}
                        </a>

                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handlepayment}> Checkout </button>
                    </div>
              
                  </div>

          </div>
                    : 
            <>
              <h5> Cart is Empty </h5>  
              <button className ="bg-white w-52  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> 
              <NavLink to= '/product'> Lets' Shopping </NavLink> </button>
            </>
    }
    </div>
    </>
  )
}

export default Cart