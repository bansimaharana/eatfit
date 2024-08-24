import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx"
import { IoIosSearch } from "react-icons/io"
import { BiSolidOffer } from "react-icons/bi"
import { MdOutlineAssignmentInd } from "react-icons/md"
import { GiShoppingCart } from "react-icons/gi"
import { TbProgressHelp } from "react-icons/tb"
import { Link } from 'react-router-dom'
import useOnline from './hooks/useOnline'
import { useSelector } from 'react-redux'

export default function Header() {
  const [slide,setslide]= useState(false);

  const showsilde = () =>{
   setslide(true)
  }
  const hideslide = () =>{
    setslide(false)
  }
  const isOnline = useOnline();
  const cartItems = useSelector((store)=>store.cart.items)
  console.log("cartsilce",cartItems)
  console.log("online status", isOnline)

   return (
  <>
    <div className='black-overlay w-full h-full fixed duration-500'onClick={hideslide} style={{
      opacity: slide ? 1 : 0,
      visibility: slide ? 'visible' : 'hidden'
    }}>
      <div className='w-[470px] bg-white h-full absolute duration-[600ms]' onClick={(e) =>{ e.stopPropagation();}} style={{ left: slide ? '0%' : '-100%' }}>

      </div>
    </div>
    <header className='shadow-xl w-full'>

      <div className=' max-auto flex items-center mr-[90px] h-[4.5rem] '>
       
        <div className='ml-[100px]'>
        
          <img src="images/food.jpeg"  className='w-[4.6rem] h-[4.6rem] mb-2 img ' />
          
        </div>
        
        <span className='font-semibold text-[18px] text-[#1a8cff] mt-2 ml-[3px]'>Madhav</span>
        <span>{isOnline? "🟢" : "🔴"}</span>
        
        <div>
          <span className='font-semibold text-[20px] text-[#3d3d5c] ml-[4.5rem]'><span className='underline shadow-sm'>other</span> < RxCaretDown onClick={showsilde} className='inline text-[#1a8cff] cursor-pointer' /></span>
        </div>

        <nav className='flex list-none gap-8 ml-auto font-semibold text-[17px]'>
          <Link to="" className='flex items-center gap-1 cursor-pointer hover:text-[#1a8cff] text-[black] text-decoration-none'>
            
            <IoIosSearch />
            search
            
          </Link>

          <Link to="/Offer" className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer text-[black] text-decoration-none'>
            <BiSolidOffer />
            offers<sup><span className='text-[#1a8cff] cursor-pointer'>new</span></sup>
          </Link>

          <Link to="/Signin" className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer  text-[black] text-decoration-none'>
            <MdOutlineAssignmentInd />
            sign In
          </Link>

          <Link to="/Help" className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer text-[black] text-decoration-none'>
            <TbProgressHelp />
            Help
          </Link>

          <Link to="/instamart" className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer text-[black] text-decoration-none'>
            <GiShoppingCart />
            Instamart
          </Link>

          <Link to="/Cart" className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer text-[black] text-decoration-none'>
            <GiShoppingCart />
            cart = {cartItems.length} items <sup className='text-[black]'>(0)</sup>
          </Link>

        </nav>




      </div>

    </header>
  </>
  )
}


 