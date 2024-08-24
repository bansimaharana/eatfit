import React from 'react'
import NormalMenu from './NormalMenu'

export default function NestedMenu({collection}) {
  return (
    <div>
    <h4>{collection?.card?.card?.title}</h4>
    {
      collection?.card?.card?.categories.map((subcategory)=>{
        return(
          <>
          {/* <h5 className='text-secondary'>{subcategory?.title}</h5>
          {
           subcategory?.itemCards.map((dish)=>{
           return(
          <Menusection
          isVeg={dish?.card?.info?.isVeg}
          name={dish?.card?.info?.name}
          costForTwo={dish?.card?.info?.defaultprice/100 || dish?.card?.info?.price/100}
          avgRating={dish?.card?.info?.ratings?.aggregatedRating?.rating}
          ratingCount={dish?.card?.info?.ratings?.aggregatedRating?.ratingCount}
          description={dish?.card?.info?.description}
          imageUrl={dish?.card?.info?.imageId}
          />
           )
           
           }) 
          } */}
          <NormalMenu normalcollection={subcategory}
           isNested={true}
           
           />
          </>
        
        )
      })
    }
    </div>
  )
}
