import React from 'react'
import { useState,useEffect } from 'react'


export default function useMenu(id) {
  
  const [menuData,setmenuData] = useState([])
  useEffect(()=>{
    const getmenu = async()=>{
      try{
       const data = await fetch(` https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
       const json = await data.json()
    //    setloading(false)
       setmenuData(json?.data?.cards)
       console.log("json",json)
      }
      catch(err){
          console.log("menu api error",err)

      }
    } 
    getmenu();
  },[]) 
  return menuData
  
}
