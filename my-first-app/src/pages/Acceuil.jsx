import React from "react";
import { useGetAllProductsQuery } from "../features/ProductApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import {useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel"


const Acceuil = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
  };
  const navigate = useNavigate();

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="home-container">
      <Carousel/>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>une erreur est survenue</p>
      ) : (
        <>
          <h2>tous les produits</h2>
          <div className="products">
            {data?.results.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3 onClick={() => navigate(`/product-detail/${product.id}`)} >  {product.title}</h3>
                  <img  onClick={() => navigate(`/product-detail/${product.id}`)}src={product.image} alt={product.title} />
                  <div className="details">
                   
                    <span className="price">{product.store_price}dt</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Ajouter au panier
                  </button>
                  <button onClick={() => handleAddToWishlist(product)}>
                    favoris
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Acceuil;
