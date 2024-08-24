import React from 'react'
import { Img_url } from './const/config';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function Restrautant({cloudinaryImageId,name,avgRatingString,sla,cuisines,areaName, id}) {
  return (
  
      <Link to={`/menu/${id}`}className='custom-card text-dark text-decoration-none'>
        <div className='mb-2 box'>
          <img src={Img_url+cloudinaryImageId} className='h-[220px] w-[240px] rounded-2xl'/>
          {/* <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'className='h-[240px] w-[240px] rounded-2xl'/> */}
        </div>

        <div className='px-2 textname'>
        <h4>{name}</h4>
      {/* <h4>chinese Work</h4> */}

      <div className='d-flex gap-[20px]'>
        <div className='flex gap-[3px]'><FcRating className='mt-1 h-5 w-5' />{avgRatingString}</div>
        {/* <div>4.3</div> */}
        <div>{sla?.deliveryTime}mins</div>
        {/* <div>40-50min</div> */}
      </div>

       <div className='cusisinename'>{cuisines.join(", ")}</div>
       {/* <div>chinese, Asian, Tribetan, Desserts</div> */}

       <div>{areaName}</div>
       {/* <div>Ghatkopar(west)</div> */}
       </div>

      </Link>  
    
  )
}

