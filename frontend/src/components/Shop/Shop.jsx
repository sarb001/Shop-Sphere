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
         <div> 
          <h1> Showing Products - {data?.filterproduct?.length} </h1>
             <div className = 'flex flex-wrap justify-around bg-slate-600 ' >
               {data?.filterproduct?.map((item) => 
                   <ShoppingCard  carditems = {item}   key = {item.id} />
               )}
             </div>
         </div>
    </>
  )
}

export default Shop