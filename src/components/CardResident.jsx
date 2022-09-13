import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/CardResidents.css";

const CardResident = ({ url }) => {
  const resident = useFetch(url);
  return (
    <article className="card">
      <header>
        <img className="card-img" src={resident?.image} alt="" />
      </header>
      <div className="circle_status">
        <span>{resident?.status}</span>
      </div>
      <div className="card-info">
        <h3 className="text-title">{resident?.name}</h3>
        <ul className="text-body">
          <li className="Species">
            <i className="fa-solid fa-user"></i>
            {resident?.species}
          </li>
          <li className="Origin">
            <i className="fa-solid fa-globe"></i>
            {resident?.origin.name}
          </li>
          <li className="Episodes">
            <i className="fa-solid fa-tv"></i>
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CardResident;
