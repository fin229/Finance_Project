import React, { FC, SyntheticEvent } from "react";
import "./Card.css"
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id:string;
  searchResult:CompanySearch;
  onPortfolioCreate:(e:SyntheticEvent)=>void
};

const Card:FC <Props>= ({id,searchResult,onPortfolioCreate}:Props) => {
  return (
    <div className="card">
      <h1>{searchResult.symbol}</h1>
      <div className="detail">
        <h2>{searchResult.name}</h2>
        <p>$ {searchResult.currency}</p>
      </div>
      <p className="info">{searchResult.stockExchange}-{searchResult.exchangeShortName}</p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  );
};

export default Card;
