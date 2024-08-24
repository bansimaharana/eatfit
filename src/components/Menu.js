import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Resinfo from './Resinfo';
import Shimmer from './shimmer'
import Menusection from './Menusection';
import useMenu from './hooks/useMenu';
import NormalMenu from './NormalMenu';
import NestedMenu from './NestedMenu';


export default function Menu() {
    const {id} = useParams();
    
    
    const menuList = useMenu(id);
    console.log("custom hook data",menuList)
    const [activeIndex, setactiveIndex] = useState(0);


   

    if(menuList.length===0){
      return <div className='container grid grid-cols-5 gap-[2rem] py-[2rem]'>
        <Shimmer/>
      </div>
    }
    
    const menucategory = menuList[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const normalMenu = menucategory.filter((menucategory)=>{
       return(
        menucategory?.card?.card["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       )
    })  
    
    const nestedMenu = menucategory.filter((menucategory)=>{
      return(
       menucategory?.card?.card["@type"]===
       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      )
   }) 
      console.log("normalMenu",normalMenu)
      console.log("nestedMenu",nestedMenu)

     const{name, avgRating, totalRatingsString, costForTwoMessage, cuisines,sla, expectationNotifiers}= menuList[2]?.card?.card?.info
     const{slaString,lastMileTravelString}=sla;
     const{enrichedText} = expectationNotifiers[0]
     const showDetails = (val)=>{
      if(activeIndex===val){
        setactiveIndex(-1)
      }
      else{
        setactiveIndex(val);

      }
     
      
    }
  return (
    <div className='menu_container'>
        <Resinfo
        name={name}
        avgrating={avgRating}
        ratingCount={totalRatingsString}
        costForTwo={costForTwoMessage}
        cuisine={cuisines.join(" , ")}
        delivery={slaString}
        distance={lastMileTravelString}
        remark={enrichedText}
        />
        <div className='p-3'>
          {
           normalMenu.map((normalCategory, index)=>{
            return(
            <NormalMenu normalcollection={normalCategory} isActive={activeIndex===index}
             toggleFunction={()=>showDetails(index)}/> 

           )
           }) 
          }
        </div>
        <div>
          {
           nestedMenu.map((category)=>{
            return(
              <NestedMenu collection={category}/>
              // <div>
              // <h4>{category?.card?.card?.title}</h4>
              // {
              //   category?.card?.card?.categories.map((subcategory)=>{
              //     return(
              //       <>
              //       <h4 className='text-secondary'>{subcategory?.title}</h4>
              //       {
              //        subcategory?.itemCards.map((dish)=>{
              //        return(
              //       <Menusection
              //       isVeg={dish?.card?.info?.isVeg}
              //       name={dish?.card?.info?.name}
              //       costForTwo={dish?.card?.info?.defaultprice/100 || dish?.card?.info?.price/100}
              //       avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
              //       ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
              //       description={dish?.card?.info?.description}
              //       imageUrl={dish?.card?.info?.imageId}
              //       />
              //        )
                     
              //        }) 
              //       }
              //       </>
              //     )
              //   })
              // }
              // </div>
            )
           }) 
          }
        </div>

    </div>
  )
}
