import React, { ChangeEvent, FC, useState, SyntheticEvent } from "react";
import "./Search.css"

interface Props {};

const Search:FC<Props> = () => {
    const [search,setSearch]=useState<string>("");

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
        console.log(e);
    }
    
    const onClick=(e:SyntheticEvent)=>{
      console.log(e)
    };

  return (
   <div>
    <input value={search} onChange={(e)=>handleChange(e)}></input>
    <button onClick={(e)=>onClick(e)}></button>
   </div>
  );
};

export default Search;
