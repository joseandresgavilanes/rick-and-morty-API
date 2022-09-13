import React from "react";
import "../styles/LocationInfo.css";

const LocationInfo = ({ location }) => {
  return (
    <article className="location">
      <h2>{location?.name}</h2>
      <ul className="planet_info">
        <li>
          <i className="fa-solid fa-earth-asia"></i>
          <span> Type:</span>
          <span className="button-text">{location?.type} </span>
        </li>

        <li>
          <i className="fa-solid fa-location-dot"></i>
          <span> Dimension:</span>
          <span className="button-text">{location?.dimension} </span>
        </li>

        <li>
          <i className="fa-solid fa-people-group"></i>
          <span> Population:</span>
          <span className="button-text">{location?.residents.length} </span>
        </li>

        {/* <li><span> Dimension:</span> {location?.dimension} </li>
            <li><span> Population:</span> {location?.residents.length} </li> */}
      </ul>
    </article>
  );
};

export default LocationInfo;
