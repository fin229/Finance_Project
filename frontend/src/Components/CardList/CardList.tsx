import React, { FC, SyntheticEvent } from "react";
import "./CardList.css"
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import {v4 as uuidv4} from "uuid"

interface Props {
  searchResults:CompanySearch[];
  onPortfolioCreate:(e:SyntheticEvent)=>void;
};

const CardList:FC<Props> = ({searchResults,onPortfolioCreate}:Props) => {
  return (
    <>
        {searchResults.length>0?(
          searchResults.map((result)=>{
            return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
          })
        ):(
          <h1>No results</h1>
        )
      }
    </>
  );
};

export default CardList;
