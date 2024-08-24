import React from 'react'
import { GiAlliedStar } from "react-icons/gi";

export default function Resinfo({name,avgrating,cuisine,delivery,costForTwo,ratingCount,remark}) {
  return (
    <div className='info_container p-2.5 h-[245px] bg-gradient-to-t from-slate-200/80 '>
      <div className='w-full border border-slate-200/70 rounded-[30px] h-[220px] bg-white p-4' >
      <h3>{name}</h3>
        <p className='flex gap-2 font-semibold'><span className='mt-1'><GiAlliedStar  color="green" size="19px"/></span>{avgrating}({ratingCount}) .{costForTwo}</p>
        <p className='underline font-semibold text-orange-600'>{cuisine}</p>
        <div className='flex gap-2'>
        <div className=''>
           <div className='w-[7px] h-[7px] bg-gray-500 rounded-md'></div>
           <div className='w-[1px] h-[25px] bg-gray-500 rounded-md ml-1'></div>
           <div className='w-[7px] h-[7px] bg-gray-500 rounded-md'></div>
       </div>
        <p className='text-lowercase mt-1'>{delivery}</p>
        </div>
      
        <p>🚲{remark.replace(/<\/?b>/g, "")}.</p>
      </div>
      
    </div>
  )
}
