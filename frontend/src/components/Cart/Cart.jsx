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
      <div className='px-12 my-6 text-center lg:pt-8 '>

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

                  <div class="flex flex-col items-center pb-10 sticky  lg:fixed  lg:right-[-245px] lg:top-[100px]">
    
                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        
                        <div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Price Details </h5>
                        </div>

                        <p className ="mb-3 font-medium">
                           <span> Total Quantity =  </span>
                           <span className='font-extrabold'> {TotalQuantity}   </span>
                        </p>

                        <p className = "inline-flex">
                           <span>  TotalPrice =  </span>
                           <span className = 'font-extrabold'>  Rs.{TotalPrice} </span>
                        </p>

                          <div className='p-3'>
                             <button className ="bg-white  w-1/2 hover:bg-gray-100 text-gray-800 font-extrabold py-2 px-4 border border-gray-400 rounded shadow" onClick={handlepayment}> Checkout </button>
                          </div>
                    </div>
              
                  </div>

          </div>
                    : 
            <>
              <h5> Cart is Empty </h5>  
              <button className ="bg-white w-52  hover:bg-gray-100 text-gray-800 font-extrabold py-2 px-4 border border-gray-400 rounded shadow"> 
              <NavLink to= '/product'> Lets' Shopping </NavLink> </button>
            </>
    }
    </div>
    </>
  )
}

export default Cart