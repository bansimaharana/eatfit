
import React, { useEffect, useState } from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { FcRating } from "react-icons/fc";

export default function TopRestaurant({data}) {
  // console.log("data",data)
    const [value, setValue] = useState(0)
    function handleNext() {
      if (value < 300) { // Proceed only if value is less than 300
          setValue((prev) => prev + 45);
      }
  }
  
  function handlePrev() {
      if (value > 0) { // Proceed only if value is greater than 0
          setValue((prev) => prev - 45);
      }
  }
  

        

  return (
    
    <div className=' mt-4 container'>
    <div className='flex items-center justify-between'>
    <div className='mr-6'><h2 className='text-[25px] font-bold text-[black]'>Top Restaurant chains in Delhi</h2></div>

    <div className='flex mr-[40px] gap-3'>
      
       <div onClick={handlePrev} className={` cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full  ` + (value <= 0 ? "bg-gray-100" : " bg-[#e2e2e7]")}>
        <HiArrowSmLeft className={`` + (value <= 0 ? "text-gray-300" : " bg-[#e2e2e7]")}  /></div>

       <div onClick={handleNext} className={`cursor-pointer flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full `  + (value >= 124 ? "bg-gray-100" : " bg-[#e2e2e7]")}>
        <HiArrowSmRight  className={`` + (value >= 124 ? "text-gray-300" : " bg-[#e2e2e7]")} /></div>

     </div>
    </div>

    <div className='mr-[45px] overflow-hidden '>
    <div style={{translate : `-${value}%`}} className={`flex mt-4 gap-4 w-full duration-300 `}>
       {
        data.map(({info}) =>(
          <div className='custom-cards img'>

          <div className='min-w-[250px] h-[182px] relative cursor-pointer'>
           <img className="h-full w-full object-cover rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.cloudinaryImageId} alt=""/>
           <div className='absolute top-0 inset-0 flex bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl'></div>
           <div className="absolute bottom-1 ml-3 mt-100 text-white text-xl font-bold">{info.aggregatedDiscountInfoV3?.header + " " + info.aggregatedDiscountInfoV3?.subHeader}</div>
          </div>

          <div className='mt-2'>
             <div className='text-xl font-semibold'>{info?.name}</div>
             <div className='d-flex gap-[20px] text-base font-semibold'>
             <div className='flex gap-[3px]'><FcRating className='mt-1 h-5 w-5' />{info?.avgRatingString}</div>
             <div>{info?.sla?.deliveryTime} min</div>
             </div>
             <div className='line-clamp-1 text-black/60 font-medium'>{info?.cuisines.join(", ")}</div>
             <div className='line-clamp-1 text-black/60 font-medium'>{info?.areaName}</div>
             </div>

          </div>
          

          
        
        ))
       } 
    
    </div>
    </div>
   
    
    

   </div>
  
    
  )
}
