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
   
        <div className ="text-center lg:hidden">
            <button className ="text-white w-[50%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 font-bold focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-disable-body-scrolling" data-drawer-show="drawer-disable-body-scrolling" data-drawer-body-scrolling="false" aria-controls="drawer-disable-body-scrolling">
                Apply Filters 
            </button>
        </div>
     
        <div>

        <div id="drawer-disable-body-scrolling" className =" lg:block
        lg:left-64 lg:top-16 lg:fixed
        fixed top-0 left-0 z-40 h-screen p-4   overflow-y-auto font-bold transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
            <h5 id="drawer-disable-body-scrolling-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"> All Filters </h5>
          
            <button type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close menu</span>
            </button>

            <div class="py-4 xl:py-10  overflow-y-auto lg:block">
                <ul class="space-y-2 font-medium">

                        <li>
                        <div> Search by Category  </div>
                                {categories?.map((item) => {
                                    return (
                                        <div key = {item.id}>
                                            <div className='m-2 flex justify-center'>
                                            <button className = "bg-white w-[80%] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => handlecategory(item)}> {item} </button>
                                            </div>
                                        </div>
                                    )
                                })}
                        </li>

                        <li>
                            <div className='p-1'>
                                <label for="price">Sort by Price</label>
                                <select name="price" id="price" onChange={(e) => handlePriceChange(e)}>
                                    <option value="lowest"> Lowest Price </option>
                                    <option value="highest"> Highest Price  </option>
                                </select>
                                </div>
                        </li>

                        <li>
                            <div className='p-1'>
                                    <div> Sort by Discount </div>
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
                        </li>

                        <li>
                            <div className='py-1 px-2'>
                                <button  className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold    py-2 px-4 border border-gray-400 rounded shadow"  value='clear' onClick={clearFilterAll}> Clear </button>
                            </div>
                        </li>

                </ul>
            </div>
        </div>


            {/* <div> Search by Category =  </div>

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
            </span> */}
         
            {/* <div>
            <label for="price">Sort by Price</label>
            <select name="price" id="price" onChange={(e) => handlePriceChange(e)}>
                <option value="lowest"> Lowest Price </option>
                <option value="highest"> Highest Price  </option>
            </select>
            </div> */}


            {/* <div>
                <div> Sort by Discount </div>
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
            </div> */}

           {/* <div style = {{padding:'4%'}}>
             <button  className = "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  value='clear' onClick={clearFilterAll}> Clear </button>
           </div> */}

        </div>
    
    </>  
  )
}

export default ProductFilter