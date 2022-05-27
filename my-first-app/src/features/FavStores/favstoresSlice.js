import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favstoresItems: [],
  status: null,
};

const favstoresSlice = createSlice({
  name: "favstores",
  initialState,
  reducers: {
    addToFavstores(state, action) {
      const itemIndex = state.favstoresItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0){
          state.favstoresItems[itemIndex].favstoresQuantity += 1
          toast.info("boutique ajoutée au favoris", {
            position: "bottom-left",
          } );
      }else{
        
      const tempStore = { ...action.payload, favstoresQuantity: 1 };
      state.favstoresItems.push(tempStore);
      toast.success("boutique ajoutée au favoris", {
        position: "bottom-left",
      } );
      }
    },
    removeFromFavStores(state, action) {
      const nextfavstoresItems = state.favstoresItems.filter(
        /*filter is an array method, returns the items that don't have
        the id of the item we want removed*/
        (favstoresItem) => favstoresItem.id !== action.payload.id
      );
      /*after receiving the new array without the item id
      we change the state of the favstoresItems, and we save the new
      state to the local storage  */
      state.favstoresItems = nextfavstoresItems;
      localStorage.setItem("favstoresItems", JSON.stringify(state.favstoresItems));
      toast.error("produit supprimé du panier", {
        position: "bottom-left",
      });
    },
  },
});

export const { addToFavstores, removeFromFavStores } = favstoresSlice.actions;

export default favstoresSlice.reducer;
