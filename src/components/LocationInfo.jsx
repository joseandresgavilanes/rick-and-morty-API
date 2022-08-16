import React from 'react'
import "../styles/LocationInfo.css"

const LocationInfo = ({location}) => {
  return (
    <article className='location'>
        <h2>{location?.name}</h2>
        <ul className='planet_info' >
            <li>
                <i class="fa-solid fa-earth-asia"></i>
                <span> Type:</span> 
                <span class="button-text">{location?.type} </span>
             

            </li>

            <li>
                <i class="fa-solid fa-location-dot"></i>
                <span> Dimension:</span>
                <span class="button-text">{location?.dimension} </span>
         

            </li>

            <li>
                <i class="fa-solid fa-people-group"></i>
                <span> Population:</span> 
                <span class="button-text">{location?.residents.length} </span>
            

            </li>
            
            {/* <li><span> Dimension:</span> {location?.dimension} </li>
            <li><span> Population:</span> {location?.residents.length} </li> */}
        </ul>
        
    </article>
  )
}

export default LocationInfo