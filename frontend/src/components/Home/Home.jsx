import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const Home = () => {

  const cards = [
    { logo : <FaShoppingCart /> , title : 'Free Delivery' , desc : 'Consectetur adipi elit lorem ipsum dolor sit amet.' },
    { logo : <MdLocalOffer/> , title : 'Daily Offers' , desc : 'Amet consectetur adipi elit loreme ipsum dolor sit'},
    { logo : <SlBadge /> , title : 'Quality Guarantee' , desc : 'Dolor sit amet orem ipsu mcons ectetur adipi elit' },
  ]


  return (
    <>
     <div className="home-section  px-6 mt-16">

        <div className=' grid grid-rows-2 gap-8 md:grid-rows-[0.4fr_0.6fr] lg:grid  lg:grid-cols-2 lg:gap-0.5  xl:grid-cols-2 xl:px-6 xl:my-8'>

          <div className = "my-14"> 
            <div className='text-[40px] w-[70%] font-extrabold md:text-[45px] md:w-[80%]'>  50% Discount Online Shop </div>
            <div className='text-xl font-semibold md:text-2xl md:mt-6'>
            Inside ShopShere  thereare many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            </div>
          </div>

          <div className='flex justify-center'> 
            <span className='flex w-[80%] h-full'>
              <img className='w-full h-full object-cover' src = "/main-shopping-img.png"  alt= "main-img" />
            </span>
          </div>
        </div>

        <div className='my-5 grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3'>
            {cards?.map((i) => {
              return (
                <div>
                  <div key = {i?.title} className='px-4 flex items-center bg-neutral-600  h-[30vh] my-4 '>
                      <span className='text-3xl'> {i.logo} </span>
                    <div>
                      <div className='text-4xl mb-5 xl:text-3xl'> {i?.title} </div>
                      <div className='text-xl lg:text-xl'> {i?.desc} </div>
                    </div>
                </div>
                </div>
            )
         })}
        </div>

     </div>
    </>
  )
}

export default Home