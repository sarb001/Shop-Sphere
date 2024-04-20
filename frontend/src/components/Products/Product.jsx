import React from 'react'
import ProductFilter from './ProductFilter'
import Shop from '../Shop/Shop'

const Product = () => {
  return (
    <>
       <div className='grid grid-cols-5 justify-between my-6'>
         <div className='col-span-1'> <ProductFilter /> </div> 
         <div className='col-span-4'> <Shop /> </div>   
      </div> 
    </>
  )
}

export default Product
