import React from 'react'
import { Img_url } from './const/config'
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { GiAlliedStar } from "react-icons/gi";

export default function Menusection({isVeg, name, costForTwo, avgRating, ratingCount, description, imageUrl }) {
  return (
    <div className='d-flex justify-content-between align-items-center'>

        <div className='container'>
          <p>{isVeg ? <IoCaretDownCircleOutline color="green" fontSize="25px" /> : <IoCaretDownCircleOutline color="red" fontSize="25px"/>}</p>
          <h6>{name}</h6>
          <h6>Rs. {costForTwo}</h6>
          {avgRating && <p className='text-success flex gap-2'><span className='mt-1'><GiAlliedStar  color="green" size="19px"/></span>{avgRating}<span className='text-success'>({ratingCount})</span></p>}
          <p className='text-secondary'>{description}</p>
        </div>
        <div>
           <img style={{width:"200px", height:"150px", objectFit:"cover", borderRadius:"20px"}}src={Img_url+imageUrl}/>
        </div>

    </div>
  )
}
