import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFiltered } from "../features/filterSlice";

function Filter ()  {

  /*const [unit_price_gt, setUnit_price_gt] = useState('');
  const [unit_price_lt, setUnit_price_lt] = useState('');*/
  const dispatch = useDispatch();
  let { id } = useParams();
  const [values, setValues] = useState({
    collection_id:id,
    unit_price_gt:"",
    unit_price_lt:"",
  })

  
 const handleSubmit = async (e) => {
   
    e.preventDefault();
    dispatch(getFiltered(values))}
  const products = useSelector((state) => state.products)
console.log("filter", products)
/* const URL = `/store/products/?collection_id=&${unit_price_gt}=&${unit_price_lt}=`;

    try {
      const {response} = await axios.get(
        URL,
        { unit_price_gt, unit_price_lt },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
   
    } catch (err) {
      return err.response;
    }
}*/


    return (
        <> 
        <form onSubmit={handleSubmit}>
        <div className="filter">
          <div className="filter-sort">
            <h1>Filtrer par:</h1>
            <span>Prix:</span>
            <br/>
            <input
              type="text"
              placeholder="Plus que"
              name="unit_price_gt"
              onChange={(e) => setValues({...values, unit_price_gt: e.target.value})}
            />

            <input
              type="text"
              placeholder="Moins que"
              name="unit_price_lt"
              
              onChange={(e) => setValues({...values, unit_price_lt: e.target.value})}
            />
              <button style={{marginLeft:"10px"}}>FILTRER</button>
           
          </div>
        </div>
      </form>

      </>
    );
  };


export default Filter;
