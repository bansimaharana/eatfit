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

      <div className=' max-auto flex items-center gap-10 mr-[90px] h-[7rem] '>
        <div className='w-[100px] ml-[90px]'>
          <img src="images/food.jpeg" className='w-full h-full ' />
          <p className='ml-[23px] text-bold text-[1.2rem]'>Madhava</p>
        </div>
        <div>
          <span className='font-bold border-b-[2px] border-b-[black] text-[20px] text-[#3d3d5c]'>other < RxCaretDown className='inline text-[#fc8019] cursor-pointer' /></span>
        </div>

        <nav className='flex list-none gap-8 ml-auto font-semibold text-[17px]'>
          <li className='flex items-center gap-1 cursor-pointer hover:text-[#1a8cff]'>
            <IoIosSearch />
            search
          </li>

          <li className='flex items-center gap-1 hover:text-[#1a8cff] cursor-pointer'>
            <BiSolidOffer />
            offers<sup><span className='text-[#fa9938] cursor-pointer'>new</span></sup>
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