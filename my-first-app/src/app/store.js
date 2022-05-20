import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { cartFetch, getTotals } from '../features/Cart/cartSlice';
import productsReducer, {  productsFetch, productsSearch } from '../features/productsSlice'
import { productsApi } from '../features/ProductApi';
import categoriesReducer, { categoriesFetch } from '../features/CategoriesSlice';
import wishlistReducer, {getTotals1 } from '../features/Wishlist/wishlistSlice';
import favstoresReducer from '../features/FavStores/favstoresSlice';
import authReducer, { loadUser } from '../features/auth/authSlice';
import sliderReducer, { imagesFetch } from '../features/sliderSlice';
import profileReducer, { getProfile, updateProfile } from '../features/profileSlice';
import singleproductReducer, { productDetail, productSize, productSizeSelected } from '../features/singleproductSlice';


//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    slider: sliderReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    favstores: favstoresReducer,
    categories: categoriesReducer,
    products: productsReducer,
    singleproduct: singleproductReducer,
    images: sliderReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
});

// this will dispatch our action creater and createasynch thunk
 store.dispatch(productsFetch());
 store.dispatch(productDetail());
 store.dispatch(getProfile());
 store.dispatch(updateProfile());
 store.dispatch(imagesFetch());
 store.dispatch(productsSearch());
 store.dispatch(cartFetch());
 store.dispatch(getTotals());
 store.dispatch(getTotals1());
 store.dispatch(loadUser(null)); // it doesn't expect any parameter so it receives null
 
 store.dispatch(getTotals1());
 store.dispatch(categoriesFetch());
 