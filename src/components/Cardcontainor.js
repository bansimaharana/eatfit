import Shimmer from './shimmer';
import Restrautant from './Restrautant'
import { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io"

export default function Cardcontainor() {
  
 const [restaurantData,setRestaurantData] = useState([]);
 const [loading,setloading] = useState(true);
 const [isfailed,setisfailed] = useState(false);
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
  
  const handleDelivery = () =>{
    const filterData = restaurantCollection.filter((restaurant)=>{
    return restaurant?.info?.sla?.deliveryTime <= 30
  })
    setRestaurantData(filterData)
}
  
const avgrating = () =>{
  const filterData = restaurantCollection.filter((restaurant)=>{
  return restaurant?.info?.avgRating >= 4.0
})
  setRestaurantData(filterData)
}
  
const pureveg = () =>{
  const filterData = restaurantCollection.filter((restaurant)=>{
  return restaurant?.info?.veg 
})
  setRestaurantData(filterData)
}
   
const returnhome = () =>{
  setRestaurantData(restaurantCollection)
}






  useEffect(() =>{
    const getRestaurants = async() =>{
      try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      setloading(false)
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setRestaurantCollection(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      catch{
        
          setloading(false)
          setisfailed(true)
      
      }
    } 
    getRestaurants()
  },[])
 
  if(loading){
   return(
    <div className="container grid grid-cols-5 gap-[2rem] py-[2rem]">
    <Shimmer/>
    </div>
   )
  }

  if(isfailed){
    return(
      <div className=''>
        <h1>something went wrong</h1>
      </div>
    )
  }

  return (
    <div> 
    <div className=' my-1 container flex'>
      <div className='relative flex items-center' >
      <button className='flex items-center' onClick={filterData}><IoIosSearch className='w-5 h-5 absolute ml-3'/></button>
       <input type="text" placeholder='search for restaurants and food'className='pr-4 pl-10 py-2 font-semibold placeholder-gray-400 w-[30rem] text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2  bg-slate-100'value={Searchtext} onChange={handlesearchText} />
      </div>

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
  
      </div>
     
      <div className=" container grid grid-cols-5 gap-[2rem] py-[2rem]">
      
      {
         restaurantData.length!==0 ? restaurantData.map((restaurant)=>{
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
