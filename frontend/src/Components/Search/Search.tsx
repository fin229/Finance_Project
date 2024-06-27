import React, { FC, useState } from "react";
import "./Search.css"

interface Props {};

const Search:FC<Props> = () => {
    const [search,setSearch]=useState<string>("");

    const onclick=(e:any)=>{
        setSearch(e.target.value);
        console.log(e);
    }
  return (
   <div>
    <input value={search} onChange={(e)=>onclick(e)}></input>
   </div>
  );
};

export default Search;
