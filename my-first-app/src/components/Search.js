import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import axios from "../features/api/axios";

const Wrapper = styled.div`
  max-width: 31.25rem;
  grid-column: 2 / 4;
  justify-self: center;
  align-self: center;
`;
const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 400px;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
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

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const searchProducts = async () => {
      
      const response = await axios.get(`/store/products/search/?q=${query}`);
      setData(response.data);
    };
    searchProducts()
  }, [query]);

  const onChangeSearch = (event) => {
    setQuery(event.currentTarget.value);
    
  };

  return (
    <div>
      <Wrapper>
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
      </Wrapper>
    </div>
  );
}

export default Search;
