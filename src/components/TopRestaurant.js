
import React, { useEffect, useState } from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import { RES_URL } from './const/config';

export default function TopRestaurant() {
    const [value, setValue] = useState(0)
    const [categories, setCategories] = useState([]);

    function handleNext(){
        value >=300 ? "" : setValue((prev) => prev  + 45)
        }
      
        function handlePrev(){
            value <= 0 ? "" : setValue((prev) => prev  - 45)
        } 

        useEffect(() =>{
            const fetchcategory = async() =>{
              
              const data = await fetch(RES_URL)
              const json = await data.json();
              // setloading(false)
              //  setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
              console.log( "bansi",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
              setCategories(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
              
            } 
            fetchcategory()
          },[])

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
        categories.map(({info}) =>(
          <div className='min-w-[250px] h-[182px] '>
           <img className="h-full w-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.cloudinaryImageId} alt=""/>

          </div>

          
        
        ))
       } 
    
    </div>
    </div>
   
    
    

   </div>
  
    
  )
}
