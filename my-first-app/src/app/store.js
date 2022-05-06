import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/Cart/cartSlice';
import productsReducer, { productsFetch } from '../features/productsSlice'
import { productsApi } from '../features/ProductApi';
import categoriesReducer from '../features/Categories&co';
import {categoriesApi} from '../features/Categories&coApi';

//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    categories: categoriesReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
    
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

// this will dispatch our action creater and createasynch thunk
 store.dispatch(productsFetch());
 