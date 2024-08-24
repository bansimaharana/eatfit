import Shimmer from './shimmer';
import Restrautant from './Restrautant'
import { useEffect, useState } from 'react'
import Filter from './Filter';
import useRestaurant from './hooks/useRestaurant';
import Searchbar from './Searchbar';
import useOnline from './hooks/useOnline';

export default function Cardcontainor() {
 const isOnline = useOnline(); 
 const [restaurantData,setRestaurantData] = useState([]);
 const [restaurantCollection,setRestaurantCollection] = useState([]);
 const resObject = useRestaurant()
//  console.log("resobject",resObject)

  // // const handlesearchText = (e) =>{
  // //  setSearchtext(e.target.value)
   
  // // } 

  //  const filterData = () =>{
  //     const filterData = restaurantCollection.filter((restaurant)=>{
  //     return restaurant?.info?.name.toLowerCase().includes(Searchtext.toLowerCase())
  //    })
  //    setRestaurantData(filterData)
  // }
  
  




if(!isOnline){
  return <h1>seems your data pack is expired</h1>
}

 
 
  if(resObject.loading){
   return(
    <div className="container grid grid-cols-5 gap-[2rem] py-[2rem]">
    <Shimmer/>
    </div>
   )
  }

  if(resObject.failed){
    return(
      <div className=''>
        <h1>something went wrong</h1>
      </div>
    )
  }

  // const data = useRestaurant();

  return (
    <div> 
    <div className=' my-1 container flex'>
     
      <Searchbar collection={resObject?.masterData} updater={resObject?.updater}/>

      <Filter collection={resObject?.masterData} updater={resObject?.updater}/>
  
      </div>
     
      <div className=" container grid grid-cols-5 gap-[2rem] py-[2rem]">
      
      {
         resObject?.resData.length !==0 ? resObject?.resData.map((restaurant)=>{
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
        }):
          <h1> some thing went wrong</h1> 
        
        
         
      } </div>

    </div>
   
  )
}
