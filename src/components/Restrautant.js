import React from 'react'
import { Img_url } from './const/config';

export default function Restrautant({cloudinaryImageId,name,avgRatingString,sla,cuisines,areaName}) {
  return (
  
      <div className='custom-card'>
        <div className='mb-2'>
          <img src={Img_url+cloudinaryImageId} className='h-[240px] w-[260px] rounded-2xl'/>
          {/* <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597'className='h-[240px] w-[240px] rounded-2xl'/> */}
        </div>

        <div className='px-2'>
        <h4 className='container'>{name}</h4>
      {/* <h4>chinese Work</h4> */}

      <div className='d-flex gap-[110px]'>
        <div>⭐{avgRatingString}</div>
        {/* <div>4.3</div> */}
        <div>{sla?.deliveryTime}mins</div>
        {/* <div>40-50min</div> */}
      </div>

       <div className='containerr'>{cuisines.join(", ")}</div>
       {/* <div>chinese, Asian, Tribetan, Desserts</div> */}

       <div className='container'>{areaName}</div>
       {/* <div>Ghatkopar(west)</div> */}
       </div>

      </div>  
    
  )
}

