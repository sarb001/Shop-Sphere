import React from 'react'
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {

  const Searchquery =  useSearchParams()[0];
  const ReferenceNum = Searchquery.get('reference');
  console.log('get Query =',ReferenceNum);

  return (
    <div>
      {ReferenceNum ? 
      <>
        <h3> Order Successfull </h3>
        <p> Order No. {ReferenceNum} </p>
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