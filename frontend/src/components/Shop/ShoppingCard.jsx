import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { add } from '../slices/CartSlice';
import checkitem from '../utils/checkitems';

const ShoppingCard = ({carditems}) => {

    const {  id ,brand , category ,description , discountPercentage , price , images , rating , stock ,title } = carditems;

    const dispatch = useDispatch();

    const { cartitem } = useSelector(state => state?.cart);
    const { quantity } = useSelector(state => state?.cart);

    const addtocart = (data) => {
        console.log('addto cart');
        dispatch(add({data,quantity}));
    }

    const checkitemexists = checkitem(cartitem , carditems?.id); 
    console.log('checkitem =',checkitemexists);

  return (
    <>

        <a href="#" class="flex flex-col items-center my-5  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[30rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={images[0]} alt = {title} />

            
            <div class="flex flex-col justify-between p-4 leading-normal items-center">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title} </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rs.{price}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {category}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ({discountPercentage?.toFixed()})%
                </p>
            
       
                 {
                            checkitemexists ? (
                                <>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <NavLink to ="/cart"> Move to Cart  </NavLink>
                                </button>
                                </>
                            ) : (
                                <>
                                <button onClick = {() => addtocart(carditems)} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Add to Cart  
                            </button>
                                </>
                            )
                        }
            </div>
         </a>
    
    </>
  )
}

export default ShoppingCard