import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "../features/api/axios";
import {useDispatch} from "react-redux"
import { searchFetch } from "../features/searchSlice";
import { useNavigate } from "react-router-dom";


function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*onKeyDown={(e) =>  {e.key === 'Enter' ; handleSearch();}*/
  const [query, setQuery] = useState("");

  
  const onChangeSearch = (event) => {
    setQuery(event.currentTarget.value);
    
  };
  const handleSearch = () => {
    navigate(`/recherche=${query}`)
  }

  return (
    <div>
      
        <div className="searchBar">
          <input
          type="text"
            value={query}
            onChange={onChangeSearch}
            
            placeholder="Cherchez un produit, une catégorie ou une marque"
          />
          <div className="searchSubmit">
            <FiSearch style={{paddingTop:"4px", fontSize:"35px", color:"#686868"}} onClick={() =>handleSearch()}/>
          </div>
        </div>
    
    </div>
  );
}

export default Search;
