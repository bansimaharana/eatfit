import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Cardcontainor from './Cardcontainor'
import Filter from './Filter'
import Searchbar from './Searchbar'
import TopRestaurant from './TopRestaurant'
import { RES_URL } from './const/config';




export default function Body() {
  const [categories, setCategories] = useState([]);
  const [categoriess, setCategoriess] = useState([]);


  useEffect(() =>{
    const fetchcategory = async() =>{
      
      const data = await fetch(RES_URL)
      const json = await data.json();
      // setloading(false)
      //  setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log( "bansi",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setCategories(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setCategoriess(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)

    } 
    fetchcategory()
  },[])

  return (
    <>
    <div>
      <div className='ml-[3.9rem]'>
    <Carousel data={categoriess}/>
    <hr className='w-[81.3rem] ml-[3rem]' />
     </div>
 
      <div className='ml-[3.9rem]'>
      <TopRestaurant data={categories} />
      <hr className='w-[81.3rem] ml-[3rem]' />
      
      </div>
    
     

     
       {/* <Filter/> */}
       {/* <Searchbar/> */}
      
      
    
    <div>
    <Cardcontainor/>
    </div>
  
    
    </div>
    </>
  )
}
