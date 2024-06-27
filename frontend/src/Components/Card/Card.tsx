import React, { FC } from "react";
import "./Card.css"

interface Props {
  companyName:string;
  ticker:string;
  price:number;
};

const Card:FC <Props>= ({companyName,ticker,price}:Props) => {
  return (
    <div className="card">
      <h1>{ticker}</h1>
      <div className="detail">
        <h2>{companyName}</h2>
        <p>${price}</p>
      </div>
      <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim!</p>
    </div>
  );
};

export default Card;
