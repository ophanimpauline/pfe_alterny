import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/Cart/CartSlice'
//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    //seller : sellerReducer,
    //wishlist : wishlistReducer,
    //favoriteStores : favoriteStoresReducer,
  },
})