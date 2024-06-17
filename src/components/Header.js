import React from 'react'
import { RxCaretDown } from "react-icons/rx"
import { IoIosSearch } from "react-icons/io"
import { BiSolidOffer } from "react-icons/bi"
import { MdOutlineAssignmentInd } from "react-icons/md"
import { GiShoppingCart } from "react-icons/gi"
import { TbProgressHelp } from "react-icons/tb"


function Header() {
  return (
    <header className='shadow-xl w-full'>

      <div className=' max-auto flex items-center mr-[90px] h-[4.5rem] '>
       
        <div className='ml-[100px]'>
          <img src="images/food.jpeg" className='w-[4.6rem] h-[4.6rem] mb-2 img ' />
        </div>
        
        <span className='font-semibold text-[18px] text-[#1a8cff] mt-2 ml-[3px]'>Madhav</span>
        
        <div>
          <span className='font-semibold text-[20px] text-[#3d3d5c] ml-[4.5rem]'><span className='underline shadow-sm'>other</span> < RxCaretDown className='inline text-[#1a8cff] cursor-pointer' /></span>
        </div>

        <nav className='flex list-none gap-8 ml-auto font-semibold text-[17px]'>
          <li className='flex items-center gap-1 cursor-pointer hover:text-[#1a8cff]'>
            <IoIosSearch />
            search
          </li>

          <li className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer'>
            <BiSolidOffer />
            offers<sup><span className='text-[#1a8cff] cursor-pointer'>new</span></sup>
          </li>

          <li className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer'>
            <MdOutlineAssignmentInd />
            sign In
          </li>

          <li className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer'>
            <TbProgressHelp />
            Help
          </li>

          <li className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer'>
            <GiShoppingCart />
            cart<sup className='text-[black]'>(0)</sup>
          </li>

        </nav>




      </div>

    </header>
  )
}


export default Header