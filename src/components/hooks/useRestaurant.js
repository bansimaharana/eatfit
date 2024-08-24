import { useState, useEffect } from 'react'
import { RES_URL } from '../const/config'

export default function useRestaurant() {
 
        const [restaurantData, setRestaurantData] = useState([]);
        const [restaurantCollection, setRestaurantCollection] = useState([]);
        const [loading, setloading] = useState(true)
        const [isfailed, setisfailed] = useState(false)

        

        useEffect(() =>{
        const getRestaurants = async() =>{
          try{
          const data = await fetch(RES_URL)
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


      const resObject = {
        resData: restaurantData,
        masterData: restaurantCollection,
        loading: loading,
        failed: isfailed,
        updater: setRestaurantData
      }

  return resObject
}

