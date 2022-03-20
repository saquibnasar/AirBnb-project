import React from "react";
import star from "../img/Star 1.png";
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <>
      <div className="card mr-18 p-relative">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} alt="" />
        <div className="mb-1">
          <img src={star} alt="" />
          <span> {props.stats.rating} </span>
          <span className="light-gray">({props.stats.raviewCount})</span>
          <span className="light-gray">.USA</span>
        </div>
        <p className="mb-1">{props.title}</p>
        <h4 className="mb-1 fw-600">
          From ${props.price} <span>/ person</span>
        </h4>
      </div>
    </>
  );
}
