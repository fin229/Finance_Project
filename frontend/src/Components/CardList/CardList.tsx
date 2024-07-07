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
    <div>
        {searchResults.length>0?(
          searchResults.map((result)=>{
            return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
          })
        ):(
          <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
          </p>
        )
      }
    </div>
  );
};

export default CardList;
