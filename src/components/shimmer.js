import React from 'react'

export default function shimmer() {
  return (
    new Array(20).fill(0).map(()=>(
        <div className='container'>
        <div className='mb-3'>
          <div className='h-[200px] w-[full] bg-slate-200 rounded'></div>
        </div>
    
        <div>
        <h4 className='h-[13px] bg-slate-200 mb-3'></h4>
    
      <div className='d-flex gap-[100px] mb-3'>
        <div className='h-[13px] bg-slate-200 w-[8rem]'></div>
        <div className='h-[13px] bg-slate-200 w-[8rem]'></div>
      </div>
    
       <div className='h-[13px] bg-slate-200 mb-3'></div>
    
       <div className='h-[13px] bg-slate-200 mb-3'></div>
    
       </div>
    
      </div>
    ))
   
    
  )
}
