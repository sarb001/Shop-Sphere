import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, filter, filterbyDiscount, filterbyDiscount1, filterbyPrice } from '../slices/ProductSlice';

const ProductFilter = () => {

    const categories = [
        "skincare",
        "fragrances",
        "laptops",
        "smartphones",
        "groceries",
        "home-decoration",
    ]

    const { data : products } = useSelector(state => state?.products);

    const dispatch = useDispatch();

    const [checkbox,setcheckbox] = useState(false);
    const [checkbox1,setcheckbox1] = useState(false);

    const handlecategory = (category) => {
         dispatch(filter({category,products}))
    }

    const handlePriceChange = (e) => {
         e.preventDefault();
         const selectedPrice = e.target.value;
         dispatch(filterbyPrice({selectedPrice , products }))
    }

    const handlediscountchange = (e) => {
        const inversecheckbox   = !checkbox;
        setcheckbox(inversecheckbox);
        const discountvalue = e.target.value;
        dispatch(filterbyDiscount({discountvalue , inversecheckbox }));
    }

    const handlesecondcountchange = (e) => {
        const nextcheckboxState =  !checkbox1;
        setcheckbox1(nextcheckboxState);
        // console.log('checkbox1 value -',nextcheckboxState);
        const discountvalue1 = e.target.value;
        dispatch(filterbyDiscount1({discountvalue1,nextcheckboxState}));
    }
    
    const clearFilterAll = () => {
        dispatch(clearFilter({filtervalue: 'clear'}));
    }

  return (
    <>
        <div className='m-4'>   
        <div> 

        <div>
            <div> Filter by Category =   
             </div>
            <span>
                 {categories?.map((item) => {
                    return (
                        <div key = {item.id}>
                            <div style = {{margin:'3%'}}>
                             <button className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => handlecategory(item)}> {item} </button>
                            </div>
                        </div>
                    )
                 })}
            </span>
         
            <div>
            <label for="price">Filter by Price</label>
            <select name="price" id="price" onChange={(e) => handlePriceChange(e)}>
                <option value="lowest"> Lowest Price </option>
                <option value="highest"> Highest Price  </option>
            </select>
            </div>


            <div>
                <div> Filter by discountPercentage </div>
                <div>
                    <label htmlFor = 'discount'> More than 10%  Discount </label>
                    <input id = "discount"  type = "checkbox"   checked = {checkbox} value='10'  
                    onChange={(e) =>  handlediscountchange(e)}
                    />
                 </div>

                <div>
                     <label htmlFor = 'discount'> Less then 10% Discount </label>
                    <input id = "discount" type = "checkbox"  value ='10'  checked = {checkbox1}   
                    onChange={(e) =>  handlesecondcountchange(e)}  />
                </div> 
            </div>

           <div style = {{padding:'4%'}}>
             <button  className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  value='clear' onClick={clearFilterAll}> Clear </button>
           </div>

        </div>
    </div>
        </div>
    </>
  )
}

export default ProductFilter