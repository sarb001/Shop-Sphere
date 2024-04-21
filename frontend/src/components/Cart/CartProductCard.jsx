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

        <a href="#" class="flex flex-col items-center bg-white border  border-black rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 my-6   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
           
         
                <img class="object-contain w-full rounded-t-lg h-52  md:h-auto md:w-48  md:rounded-none md:rounded-s-lg" src={images[0]} alt={title} />
                
             <div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <div>
                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {title}  </h3>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                        </p>
                        <p className='text-2xl font-bold tracking-tight text-gray-900 '> Rs.={price}/- </p>
                    </div>

                    <div className='flex flex-row py-4'>
                        <button  onClick = {() => checkincrement(carditems)}   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Inc ++
                        </button>
                        
                        <span className='flex justify-center items-center text-black font-bold text-xl '> {quantity} </span>

                        <button   disabled = {quantity <= 1 }  onClick = {() => checkdecrement(carditems)}  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"> Dec -- </button>
                    </div>

                    <div>

                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={() => RemovefromCart(id)}>  Remove from  Cart </button>

                    </div>

                </div>
            </div>

        </a>
    </>
  )
}

export default CartProductCard