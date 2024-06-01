import React from 'react'
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {

  const Searchquery =  useSearchParams()[0];
  const ReferenceNum = Searchquery.get('reference');
  console.log('get Query =',ReferenceNum);

  return (
    <div className='flex justify-center items-center text-2xl'>
      {ReferenceNum ? 
      <>
        <div> Order Successfull </div>
        <div> Order No. {ReferenceNum} </div> 
      </>
      : 
      <>
       <h2> Order UnSuccessfull </h2>
      </>
      }
    </div>
  )
}

export default PaymentSuccess