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

        <div>{
            checkitemexists ? (
                <>
                    <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> 
                        <NavLink to = "/cart">  Move to Cart  </NavLink>
                    </button>
                </>
            ) : (
                <>
                 <button  onClick = {() => addtocart(carditems)}  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Add to Cart </button>
                </>
            )
        }
       
        </div>
        </div>
    </>
  )
}

export default ShoppingCard