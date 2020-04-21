import React from "react";

import "./card.style.component.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monsters"
      //Using a URL perameter for line 10
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h1> {props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
