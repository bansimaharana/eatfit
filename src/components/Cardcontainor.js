import Shimmer from './shimmer';
import Restrautant from './Restrautant'
import { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io"

export default function Cardcontainor() {
  
 const [restaurantData,setRestaurantData] = useState([]);
 const [loading,setloading] = useState(true);
 const [restaurantCollection,setRestaurantCollection] = useState([]);
 const [Searchtext,setSearchtext] = useState([])



  const handlesearchText = (e) =>{
   setSearchtext(e.target.value)
  } 

  const filterData = () =>{
   const filterData = restaurantCollection.filter((restaurant)=>{
      return restaurant?.info?.name.toLowerCase().includes(Searchtext.toLowerCase())
    })
    setRestaurantData(filterData)
  }


  useEffect(() =>{
    const getRestaurants = async() =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setloading(false)
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 
    getRestaurants()
  },[])
 
  if(loading){
   return(
    <div className="container grid grid-cols-5 gap-[2rem] py-[2rem]">
    <Shimmer/>
    </div>
   )
  };

  return (
    <> 
    <div className='container my-1'>
      <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
      <button className='flex items-center' onClick={filterData}><IoIosSearch className='w-5 h-5 absolute ml-3'/></button>
       <input type="text" placeholder='search for restaurants and food'className='pr-4 pl-10 py-2 font-semibold placeholder-gray-400 w-[50%] text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2'value={Searchtext} onChange={handlesearchText} />
      </div>
    </div>
     { <div className=" custom-card container grid grid-cols-5 gap-[2rem] py-[2rem]">
      
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
