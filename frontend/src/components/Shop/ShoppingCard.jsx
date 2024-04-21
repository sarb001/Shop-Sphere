import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { add } from '../slices/CartSlice';
import checkitem from '../utils/checkitems';

const ShoppingCard = ({carditems}) => {

    const {  id ,brand , category ,description , discountPercentage , price , images , rating , stock ,title } = carditems;

    const dispatch = useDispatch();

    const { cartitem ,quantity } = useSelector(state => state?.cart);

    const addtocart = (data) => {
        console.log('addto cart');
        dispatch(add({data,quantity}));
    }

    const checkitemexists = checkitem(cartitem , carditems?.id); 
    console.log('checkitem =',checkitemexists);

  return (
    <>

        <div class="flex flex-col items-center my-5  rounded-lg shadow md:flex-row md:max-w-[30rem]  border-2  border-black">

            <img class="object-cover w-full rounded-t-lg h-32  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={images[0]} alt = {title} />

            
            <div class="flex flex-col justify-between p-4 leading-normal items-center">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title} </h5>
                <p class="mb-3 font-normal">
                    {description}
                </p>
                <p class="mb-3 font-normal">
                Rs.{price}
                </p>
                <p class="mb-3 font-normal">
                    {category}
                </p>
                <p class="mb-3 font-normal">
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
        </div>
    
    </>
  )
}

export default ShoppingCard