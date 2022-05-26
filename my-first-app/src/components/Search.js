import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import axios from "../features/api/axios";
import {useDispatch} from "react-redux"
import { searchFetch } from "../features/searchSlice";

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: large;
`;
const SearchInput = styled.input`
  width: 400px;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 0.90rem;
`;
const SearchSubmit = styled.button`
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

function Search() {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  //const [data, setData] = useState([]);
 /* useEffect(() => {
    const searchProducts = async () => {
      
      const response = await axios.get(`/store/products/search/?q=${query}`);
      setData(response.data);
    };
    searchProducts()
  }, [query]);*/
  useEffect(() => {
   
     dispatch(searchFetch(query))
    
  }, [query, dispatch]);

  const onChangeSearch = (event) => {
    setQuery(event.currentTarget.value);
    
  };

  return (
    <div>
      
        <SearchBar>
          <SearchInput
            value={query}
            onChange={onChangeSearch}
            placeholder="Cherchez un produit, une catégorie ou une marque"
          />
          <SearchSubmit>
            <FiSearch />
          </SearchSubmit>
        </SearchBar>
    
    </div>
  );
}

export default Search;
