import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {productDetail} from "../features/singleproductSlice"
import { addToCart } from "../features/Cart/cartSlice";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const dispatch = useDispatch();

  let { id } = useParams();

  //id normalement is received from the props of the other page
  //pass in an empty array as a dependency so it stops rerendering after the first render, see if we need to clean up the useEffect too
  useEffect(() => {
    dispatch(productDetail(id));
  }, []);
 //see in video the state thingy so i can navigate between product images 

  const { items, images, id_for_cart, reviews, status, } = useSelector(
    (state) => state.singleproduct
  );

  const handleAddToCart = (items) => {
  dispatch(addToCart(items));

  };

  const handleAddToWishlist = (items) => {
  dispatch(addToWishlist(items));
  };

  return (
    <>
    <div className="container-spd"> 
      <div className="product-detail-spd" key={items.id}>
        <div className="big-img-spd">
          <img className="big-img" src={items.images[0].image} alt="image1" />
        </div>
        <div className="box-spd">
          <div className="row-spd">
            <h2>{items.title} </h2>
            <span>{items.unit_price}dt</span>
          </div>
          <div className="colors-spd">
            here the colors
            {/*{product.colors.map(color => (
           <button style = {{background: color }}></button>
         ))} */}
          </div>
          <p>{items.description}</p>
          <div className="thumb-spd">
          <img src={items.images[0].image} alt="image0"/>
          <img src={items.images[1].image} alt="image1"/>
          <img src={items.images[2].image} alt="image2"/>
          <img src={items.images[3].image} alt="image3"/>
          </div>
          <button className="cart-spd" onClick={() => handleAddToCart(items)}> Ajouter au panier</button>
          <button className="wishlist-spd" onClick={() => handleAddToWishlist(items)}> Ajouter au panier</button>
        </div>
      </div>
      </div>
    </>
  );
}
