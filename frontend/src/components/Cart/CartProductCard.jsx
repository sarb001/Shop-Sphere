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
       <div class="max-w-sm rounded overflow-hidden shadow-lg m-4" key = {id}>
            <div>
                 <img class="w-full" src= {images[0]} alt ={title} />
            </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"> {title} </div>
            <p class="text-gray-700 text-base"> {description} </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">({discountPercentage?.toFixed()})% </span>
        </div>

        <div>
                <>
                    <button  onClick = {() => checkincrement(carditems)}   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Inc ++
                    </button>
                </>
                <>
                 <button  onClick = {() => checkdecrement(carditems)}  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Dec -- </button>
                </>
       
        </div>

         <div>
            <button onClick={() => RemovefromCart(id)}>  Remove from  Cart </button>
         </div>
        </div>
    </>
  )
}

export default CartProductCard