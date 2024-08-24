import React from 'react'
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io"

export default function Searchbar ({collection, updater}) {
  const [Searchtext, setSearchtext] = useState("")
  
  const handlesearchText = (e) =>{
    setSearchtext(e.target.value)
    
   } 
 
   const filterData = () =>{
       const filterData = collection.filter((restaurant)=>{
       return restaurant?.info?.name.toLowerCase().includes(Searchtext.toLowerCase())
     })
     updater(filterData)
   }
  return (
    <div className=' flex items-center' >
    <button className='flex items-center' onClick={filterData}><IoIosSearch className='w-5 h-5 absolute ml-3'/></button>
     <input type="text" placeholder='search for restaurants and food'className='pr-4 pl-10 py-2 font-semibold placeholder-gray-400 w-[30rem] text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2  bg-slate-100'value={Searchtext} onChange={handlesearchText} />
    </div>
  )
}

