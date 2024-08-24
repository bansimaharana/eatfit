import React from 'react'

export default function Filter({collection,updater}) {
  const handleDelivery = () =>{
    const filterData = collection.filter((restaurant)=>{
    return restaurant?.info?.sla?.deliveryTime <= 30
  })
    updater(filterData)
}
  
const avgrating = () =>{
  const filterData = collection.filter((restaurant)=>{
  return restaurant?.info?.avgRating >= 4.0
})
  updater(filterData)
}
  
const pureveg = () =>{
  const filterData = collection.filter((restaurant)=>{
  return restaurant?.info?.veg 
})
  updater(filterData)
}
   
const returnhome = () =>{
  updater(collection)
}
  return (
    <div className='ml-auto flex gap-[1rem] items-center font-semibold'>
    <div className='rounded-3xl border-none ring-1 ring-gray-400 px-2 p-1 hover:bg-slate-100 hover:text-[#1a8cff]'>
      <button onClick={handleDelivery}>Fast Delivery</button>
    </div>
    <div className='rounded-3xl border-none ring-1 ring-gray-400 px-2 p-1 hover:bg-slate-100 hover:text-[#1a8cff]'>
      <button onClick={avgrating}>Ratings 4.0+</button>
    </div>
    <div className='rounded-3xl border-none ring-1 ring-gray-400 px-2 p-1 hover:bg-slate-100 hover:text-[#1a8cff]'>
      <button onClick={pureveg}>Pure Veg</button>
    </div>
    <div className='rounded-3xl border-none ring-1 ring-gray-400 px-2 p-1 hover:bg-slate-100 hover:text-[#1a8cff]'>
      <button>Less than Rs.300</button>
    </div>
    <div className='rounded-3xl border-none ring-1 ring-gray-400 px-2 p-1 hover:bg-slate-100 hover:text-[#1a8cff]'>
      <button onClick={returnhome}>Home</button>
    </div>
    </div>
  )
}

