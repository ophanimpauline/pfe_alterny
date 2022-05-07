import { createSlice } from "@reduxjs/toolkit";
import {toast } from "react-toastify";

const initialState = {
  wishlistItems: [],
  wishlistTotalQuantity: 0,
  wishlistTotalAmount: 0,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0){
          state.wishlistItems[itemIndex].wishlistQuantity += 1
          toast.info("produit ajouté au wishlist", {
            position: "bottom-left",
          } );
      }else{
        
      const tempProduct = { ...action.payload, wishlistQuantity: 1 };
      state.Items.push(tempProduct);
      toast.success("nouveau produit ajouté", {
        position: "bottom-left",
      } );
      }
      
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
