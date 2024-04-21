import React from 'react'
import ProductFilter from './ProductFilter'
import Shop from '../Shop/Shop'

const Product = () => {
  return (
    <>
       <div className='flex flex-col my-6 px-4'>
         <div > <ProductFilter /> </div> 
         <div > <Shop /> </div>   
      </div> 
    </>
  )
}

export default Product
