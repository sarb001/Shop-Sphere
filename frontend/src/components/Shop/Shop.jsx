import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/ProductActions';
import ShoppingCard from './ShoppingCard';

const Shop = () => {

    const  data  = useSelector(state => state?.products); 
    console.log('data in shop =',data);
    const  loading  = useSelector(state => state?.products); 
    console.log('loading shop =',loading);
    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getAllProducts());
    },[])

  return (
    <>
         <div className='lg:relative lg:top-10 lg:z-0'> 
          <div className='text-xl flex justify-center font-bold'> Showing Products - {data?.filterproduct?.length} </div>
             <div className = 'flex flex-wrap justify-around p-1' >
               {data?.filterproduct?.map((item) => 
                   <ShoppingCard  carditems = {item}   key = {item.id} />
               )}
             </div>
         </div>
    </>
  )
}

export default Shop