import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/Cart/cartSlice';
import productsReducer, { productsFetch } from '../features/productsSlice'
import { productsApi } from '../features/ProductApi';

//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// this will dispatch our action creater and createasynch thunk
 store.dispatch(productsFetch());
 