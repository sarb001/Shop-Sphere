import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { decrementproduct, incrementproduct, remove } from '../slices/CartSlice';

const CartProductCard = ({carditems}) => {

    console.log('cart items =',carditems);

    const { quantity , id ,brand , category ,description , discountPercentage , price , images , rating , stock ,title } = carditems;
    console.log('card product card =',quantity , id, brand , category ,description , discountPercentage , price , images , rating , stock ,title);

    const dispatch = useDispatch();
    const checkincrement = (carditems) => {
        dispatch(incrementproduct({carditems,quantity}));
    }

    const checkdecrement = (carditems) => {
        dispatch(decrementproduct({carditems,quantity}));
    }

    const RemovefromCart = (id) => {
        console.log('removed id =',id);
        dispatch(remove({id}));
    }

  return (
    <>

        <a href="#" class="flex flex-row items-center bg-white border  border-black rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 my-6   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
           
         
                <img class="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-48  md:rounded-none md:rounded-s-lg" src={images[0]} alt={title} />
                
             <div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title}  </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                    </p>
                    <p> Rs.={price}/- </p>

                    <button  onClick = {() => checkincrement(carditems)}   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Inc ++
                    </button>
                        <span> {quantity} </span>
                    <button   disabled = {quantity <= 1 }  onClick = {() => checkdecrement(carditems)}  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Dec -- </button>

                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => RemovefromCart(id)}>  Remove from  Cart </button>

                </div>
            </div>

        </a>
    </>
  )
}

export default CartProductCard