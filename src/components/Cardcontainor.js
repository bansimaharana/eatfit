import Restrautant from './Restrautant'
import {restaurantList} from './const/config'
import { useEffect, useState } from 'react';

export default function Cardcontainor() {
  
 const [restaurantData,setRestaurantData] = useState([])

  const getRestaurants = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // console.log("json", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  } 
  
  useEffect(() =>{
    getRestaurants()
  },[])
  
  return (
    <> 
    <div className='container my-3' >
      <input type="text" className='p-2 rounded-lg max-w-35rem' placeholder='Enter name of the restaurant' />
      <button className='btn btn-light'>🔍</button>
    </div>
     { <div className="container grid grid-cols-4 gap-[2rem] py-[2rem]">
      
      {
        restaurantData.map((restaurant)=>{
          return(
            <Restrautant
            // imgurl={Img_url+restaurant?.info?.cloudinaryImageId}
            // title={ restaurant?.info?.name}
            // starRating={restaurant?.info?.avgRatingString}
            // deliverTime={restaurant?.info?.sla?.deliveryTime}
            // cusisines={restaurant?.info?.cuisines.join(", ")}
            // location={restaurant?.info?.areaName}

            {...restaurant?.info}
            
           />
           
          )
        })
         
        }
        

      
      
     
    
    
    
     </div> }
    </>
   
  )
}
