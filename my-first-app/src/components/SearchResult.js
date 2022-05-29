import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { searchFetch } from '../features/searchSlice';

export default function SearchResult() {
let {query} = useParams();
const dispatch = useDispatch();
const search = useSelector((state) => state.search)

useEffect(() => {
   
    dispatch(searchFetch(query))
   
 }, [query, dispatch]);

  return (
    <div>SearchResult</div>
  )
}
