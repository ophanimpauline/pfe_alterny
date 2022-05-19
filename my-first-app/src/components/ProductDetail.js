import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetail, productsSlice } from "../features/productsSlice";
import { addToCart } from "../features/Cart/cartSlice";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";


export default function ProductDetail() {
  const dispatch = useDispatch();
//id normalement is received from the props of the other page
useEffect(() => {
  dispatch(productDetail(id));
});

const productdetail = useSelector((state) => state.products);

const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  
};

const handleAddToWishlist = (product) => {
  dispatch(addToWishlist(product));
};

  return (
    <>
      <div className="product-detail">
        {productdetail.status &&
          productdetail.map((product) => {
            <div className="product-detail-1" key={productdetail.items.id}>
              <img src={productdetail.} alt=""
            </div>;
          })}
      </div>
    </>
  );
}
