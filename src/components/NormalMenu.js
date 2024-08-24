import React from 'react'
import Menusection from './Menusection'
import { useState } from 'react'
import { IoChevronDownOutline } from "react-icons/io5";
export default function NormalMenu({normalcollection, isActive, toggleFunction, isNested }) {
    const [showList, setshowList] = useState(false)
  return (
            <>
            <div className=' flex justify-between'>
              <h5 key={normalcollection?.card?.card?.title} className='p-3 font-semibold text-2xl' > 
            {isNested ? normalcollection?. title : normalcollection?.card?.card?.title}</h5>
              <IoChevronDownOutline  fontSize="25px" onClick={isNested ? ()=>setshowList(!showList) : toggleFunction}/>
            </div>

               {isNested ?  normalcollection?.itemCards.map((dish)=>{
                  return(
                    showList && <>
                    <Menusection
                    isVeg={dish?.card?.info?.isVeg}
                    name={dish?.card?.info?.name}
                    costForTwo={dish?.card?.info?.defaultprice/100 || dish?.card?.info?.price/100}
                    avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                    ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                    description={dish?.card?.info?.description}
                    imageUrl={dish?.card?.info?.imageId}
                    />
                    <hr/>
                    </>
                    

                  )
                }) :
                normalcollection?.card?.card?.itemCards.map((dish)=>{
                  return(
                    isActive && 
                    (<>
                    <Menusection
                    isVeg={dish?.card?.info?.isVeg}
                    name={dish?.card?.info?.name}
                    costForTwo={dish?.card?.info?.defaultprice/100 || dish?.card?.info?.price/100}
                    avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
                    ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                    description={dish?.card?.info?.description}
                    imageUrl={dish?.card?.info?.imageId}
                    />
                    <hr/>
                    </>)
                    

                  )
                })}
              </>
            )}