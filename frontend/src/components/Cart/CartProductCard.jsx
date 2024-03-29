import React from 'react'
import { NavLink } from 'react-router-dom';

const CartProductCard = ({carditems}) => {

    console.log('cart items =',carditems);

    const { quantity , id ,brand , category ,description , discountPercentage , price , images , rating , stock ,title } = carditems;
    console.log('card product card =',quantity , id, brand , category ,description , discountPercentage , price , images , rating , stock ,title);
 
    const checkitem = true;

    const checkincrement = () => {}
    const checkdecrement = () => {}
    const RemovefromCart = () => {}


  return (
    <>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-56 md:h-auto md:w-36 md:rounded-none md:rounded-s-lg" src={images[0]} alt={title} />

        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title} 
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
        </div>

        <div>  
                    <button  onClick = {() => checkincrement(carditems)}   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Inc ++
                    </button>
                
                 <button  onClick = {() => checkdecrement(carditems)}  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Dec -- </button>

                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => RemovefromCart(id)}>  Remove from  Cart </button>
        </div>
    </a>

    </>
  )
}

export default CartProductCard