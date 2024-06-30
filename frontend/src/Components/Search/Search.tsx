import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import "./Search.css"

interface Props {
  onClick:(e:SyntheticEvent)=>void;
  search:string|undefined;
  handleChange:(e:ChangeEvent<HTMLInputElement>)=>void
};

const Search:FC<Props> = ({onClick,search,handleChange}:Props) => {
   
  return (
   <div>
    <input value={search} onChange={(e)=>handleChange(e)}></input>
    <button onClick={(e)=>onClick(e)}></button>
   </div>
  );
};

export default Search;
