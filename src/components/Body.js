import React from 'react'
import Carousel from './Carousel'
import Cardcontainor from './Cardcontainor'
import Filter from './Filter'
import Searchbar from './Searchbar'




export default function Body() {
  return (
    <>
    <div>
      <div className='ml-[3.9rem]'>
    <Carousel/>
    <hr className='w-[77rem] ml-[5.2rem]' />
     </div>

     

      <div className='flex justify-between' >
       <Filter/>
       <Searchbar/>
      </div>
      
    
    <div className='ml-[3.9rem]'>
    <Cardcontainor/>
    </div>
  
    
    </div>
    </>
  )
}
