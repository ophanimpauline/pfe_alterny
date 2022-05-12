import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { cartFetch, getTotals } from '../features/Cart/cartSlice';
import productsReducer, { productsFetch } from '../features/productsSlice'
import { productsApi } from '../features/ProductApi';
import categoriesReducer, { categoriesFetch } from '../features/CategoriesSlice';
import wishlistReducer, {getTotals1 } from '../features/Wishlist/wishlistSlice';
import favstoresReducer from '../features/FavStores/favstoresSlice';
import authReducer from '../features/auth/authSlice';


//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    favstores: favstoresReducer,
    categories: categoriesReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
});

// this will dispatch our action creater and createasynch thunk
 store.dispatch(productsFetch());
 store.dispatch(cartFetch());
 store.dispatch(getTotals());
 store.dispatch(getTotals1());
 store.dispatch(categoriesFetch());
 