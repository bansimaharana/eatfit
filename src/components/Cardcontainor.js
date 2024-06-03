import Restrautant from './Restrautant'
import {restaurantList} from './const/config'


export default function Cardcontainor() {
  
// console.log(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
const restaurants =restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  
  return (
    <div className="container grid grid-cols-4 gap-[2rem] py-[2rem]">
      
      {
        restaurants.map((restaurant)=>{
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
        

      
      
     
    
    
    
     </div>
  )
}
