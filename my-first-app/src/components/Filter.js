import React from "react";
import { useState } from "react";
import axios from "../features/api/axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
function Filter ()  {
  const [unit_price_gt, setUnit_price_gt] = useState('');
  const [unit_price_lt, setUnit_price_lt] = useState('');
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
 const URL = `/store/products/?collection_id=&${unit_price_gt}=&${unit_price_lt}=`;

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
}


    return (
        <> 
        <form onSubmit={handleSubmit}>
        <div className="filter">
          <div className="filter-sort">
            <h1>Filtrer par:</h1>
            <span>Prix:</span>
            <input
              type="text"
              placeholder="moins que"
              name="unit_price_gt"
              value={unit_price_gt}
              onChange={(e) => setUnit_price_gt(e.target.value)}
            />

            <input
              type="text"
              placeholder="plus que"
              name="unit_price_lt"
              value={unit_price_lt}
              onChange={(e) => setUnit_price_lt(e.target.value)}
            />
              <button>FILTRER</button>
           
          </div>
        </div>
      </form>

      </>
    );
  };

export default Filter;
