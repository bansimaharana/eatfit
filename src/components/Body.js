import React from 'react'
import Carousel from './Carousel'
import Cardcontainor from './Cardcontainor'
import Filter from './Filter'
import Searchbar from './Searchbar'
import TopRestaurant from './TopRestaurant'




export default function Body() {
  return (
    <>
    <div>
      <div className='ml-[3.9rem]'>
    <Carousel/>
    <hr className='w-[81.3rem] ml-[3rem]' />
     </div>
 
      <div className='ml-[3.9rem]'>
      <TopRestaurant/>
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
