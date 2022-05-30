import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import {useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { productByCol } from '../features/productsSlice';


export default function ProdParCat() {
    const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(productByCol(id));
  }, [id, dispatch]);

  const navigate = useNavigate();
  const products = useSelector((state) => state.products)

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
      <> {products?.items? (
          <> 
 
          <div className="products">
            {products?.items.results.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3 onClick={() => navigate(`/product-detail/${product.id}`)} >  {product.title}</h3>
                  <img  onClick={() => navigate(`/product-detail/${product.id}`)}src={product.image} alt={product.title} />
                  <div className="details">
                   
                    <span className="price">{product.store_price}dt</span>
                  </div>
                     <button onClick={() => handleAddToWishlist(product)}>
                     favoris
                   </button> 
                </div>
              );
            })}
          </div>
        </>
  ) : <>
  <h3>Une erreur est survenue ! </h3>
  </>
}</> 
        )
}
