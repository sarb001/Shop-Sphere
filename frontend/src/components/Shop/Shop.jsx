import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/ProductActions';
import ShoppingCard from './ShoppingCard';

const Shop = () => {

    const  data  = useSelector(state => state?.products); 
    const  loading  = useSelector(state => state?.products); 
    console.log('loading shop =',loading);
    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getAllProducts());
    },[])


  return (
    <>
         <div>
             <div className='flex flex-wrap'>
               {data?.data?.map((item) => 
                   <ShoppingCard  carditems = {item}   key = {item.id} />
               )}
             </div>
         </div>
    </>
  )
}

export default Shop