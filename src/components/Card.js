import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../img/${props.item.coverImg}`)}
        alt={props.item.coverImg}
        className="card--image"
      />
      <div className="card--stats">
        <img
          src={require("../img/Star 1.png")}
          alt="star"
          className="card--star"
        />
        <span>{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount}) ∙ </span>
        <span>{props.item.country}</span>
      </div>
      <p>{props.item.title}</p>
      <p>From {props.item.price} / person</p>
    </section>
  );
}
