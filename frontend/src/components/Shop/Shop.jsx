import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/ProductActions';

const Shop = () => {

    const  data  = useSelector(state => state?.products); 
    // console.log('loading ==',loading);

    console.log('data ==',data);
    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(getAllProducts());
    },[dispatch])


  return (
    <>
         <div>
             <h2> All Products </h2>
         </div>
    </>
  )
}

export default Shop