import React from 'react'
import ProductFilter from './ProductFilter'
import Shop from '../Shop/Shop.1'

const Product = () => {
  return (
    <>
      <div className='grid grid-cols-[0.8fr,2.6fr]'>
         <span> <ProductFilter /> </span>
         <span> <Shop /> </span>
      </div>
    </>
  )
}

export default Product