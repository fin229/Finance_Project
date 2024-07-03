import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import "./Search.css"

interface Props {
  onSearchSubmit:(e:SyntheticEvent)=>void;
  search:string|undefined;
  handleSearchChange:(e:ChangeEvent<HTMLInputElement>)=>void
};

const Search:FC<Props> = ({onSearchSubmit,search,handleSearchChange}:Props) => {
   
  return (
   <>
   <form onSubmit={onSearchSubmit}>
    <input value={search} onChange={(e)=>handleSearchChange(e)}></input>
   </form>
   </>
  );
};

export default Search;
