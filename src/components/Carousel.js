import React, { useEffect, useState } from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { RES_URL } from './const/config';


export default function Carousel({data}) {
  const [value, setValue] = useState(0)
  
  function handleNext() {
    if (value < 124) { // Only proceed if value is less than 124
        setValue((prev) => prev + 23);
    }
}

function handlePrev() {
    if (value > 0) { // Only proceed if value is greater than 0
        setValue((prev) => prev - 23);
    }
}
 
 
  
  return (
    <div className=' pt-6 container'>
    <div className='flex items-center justify-between'>
    <div className='mr-6'><h2 className='text-[25px] font-bold text-[black]'>What's on your mind?</h2></div>

    <div className='flex mr-[40px] gap-3'>
      
       <div onClick={handlePrev} className={` cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full  ` + (value <= 0 ? "bg-gray-100" : " bg-[#e2e2e7]")}>
        <HiArrowSmLeft className={`` + (value <= 0 ? "text-gray-300" : " bg-[#e2e2e7]")}  /></div>

       <div onClick={handleNext} className={`cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full `  + (value >= 124 ? "bg-gray-100" : " bg-[#e2e2e7]")}>
        <HiArrowSmRight  className={`` + (value >= 124 ? "text-gray-300" : " bg-[#e2e2e7]")} /></div>

     </div>
    </div>

    <div  className='overflow-hidden mr-[45px]'>
    <div style={{translate : `-${value}%`}} className={`flex duration-3000`}>
     {
      data.map((items)=>(
       
        <img className='w-[150px]  cursor-pointer' src={`https://media-assets.swiggy.com/swiggy/image/upload/${items.imageId}`}/>
       
      ))
     }
    </div>
    </div>
    

   </div>
  )
   
  
}

