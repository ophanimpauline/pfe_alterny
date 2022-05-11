import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  /*the global object is the local storage
  we use a method called getItem and pass in the key which is
  carItems. first we check if there is anything there, then cartItems receives
  what's in that object in the localstorage, else, it rececives
  an empty array */
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      /*this is an array method that we're using to check if the
      item already exists in the cart or not, we compare the ids */
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      /*if we already have the item we increment the quantity by 1
       */
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("produit ajouté au panier", {
          position: "bottom-left",
        });
      } else {
        /*we don't have the item in the cart, we simply push it
        to the cart and set the quantity to 1 */
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("quanité du produit a augmenté", {
          position: "bottom-left",
        });
      }
      /*saving the cart items in the local storage so if we refresh we don't lose
      our items */
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        /*filter is an array method, returns the items that don't have
        the id of the item we want removed*/
        (cartItem) => cartItem.id !== action.payload.id
      );
      /*after receiving the new array without the item id
      we change the state of the cartItems, and we save the new
      state to the local storage  */
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("produit supprimé du panier", {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      /*the id of the item we're decreasing/adding/increasing is
        the action.payload.id  */
      const itemIndex = Array.isArray(state.cartItems) ? state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      ) : -1 ;
      console.log(itemIndex); 

      /*if the quantity of the product is greater than one we can decrease
      else we delete the item from the cart  */
      if (state.cartItems(itemIndex).cartQuantity > 1) {
        state.cartItems(itemIndex).cartQuantity -= 1;
      } else if (state.cartItems(itemIndex).cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("produit supprimé du panier", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state, action){
      /*to clear the cart all you have to do is to set the cartitems
      to an empty array */
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action){
      /*here we use a reduce function that takes two parameters
      an array function as a callback method and an initial value */
      let {total, quantity} =  state.cartItems.reduce((cartTotal, cartItem) =>{
        /*we are destructuring the callback objects */
        const {store_price, cartQuantity} = cartItem;
        const itemTotal = store_price * cartQuantity;
        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity
 
        return cartTotal 
      }, {
        total: 0,
        quantity: 0
      } );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;
