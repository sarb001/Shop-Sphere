import React from 'react'
import ProductFilter from './ProductFilter'
import Shop from '../Shop/Shop'

const Product = () => {
  return (
    <>
       <div className='flex flex-col my-6 px-4  lg:grid lg:grid-cols-6'>
         <div className='lg:col-span-2 xl:col-span-1'> <ProductFilter /> </div> 
         <div className='lg:col-span-4 xl:col-span-5'> <Shop /> </div>   
      </div> 
    </>
  )
}

export default Product
