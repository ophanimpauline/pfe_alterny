import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favstoresItems: [],
  favstoresTotalQuantity: 0,
  favstoresTotalAmount: 0,
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
        
      const tempStore = { ...action.payload, cartQuantity: 1 };
      state.favstoresItems.push(tempStore);
      toast.success("boutique ajoutée au favoris", {
        position: "bottom-left",
      } );
      }
    },
  },
});

export const { addToFavstores } = favstoresSlice.actions;

export default favstoresSlice.reducer;
