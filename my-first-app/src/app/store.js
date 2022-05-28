import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { sendOrder, getTotals } from '../features/Cart/cartSlice';
import productsReducer, {  productBySubCollection, productsFetch } from '../features/productsSlice'
import { productsApi } from '../features/ProductApi';
import categoriesReducer, { categoriesFetch } from '../features/CategoriesSlice';
import wishlistReducer, {getTotals1 } from '../features/Wishlist/wishlistSlice';
import favstoresReducer from '../features/FavStores/favstoresSlice';
import authReducer, {getMe, loadUser} from '../features/auth/authSlice';
import sliderReducer, { imagesFetch } from '../features/sliderSlice';
import profileReducer, { getProfile, updateProfile } from '../features/profileSlice';
import singleproductReducer, { productDetail } from '../features/singleproductSlice';
import StoreReducer from '../features/Store/StoreSlice';



//we import the slices as any name we want, then we affect the actual reducer to that name inside the reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // profile: profileReducer,
    slider: sliderReducer,
    cart: cartReducer,
    store: StoreReducer,
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
 store.dispatch(getProfile());
 store.dispatch(productBySubCollection());
 store.dispatch(imagesFetch());
 store.dispatch(getTotals());
 store.dispatch(getTotals1());
 store.dispatch(loadUser(null)); // it doesn't expect any parameter so it receives null
 store.dispatch(categoriesFetch());
 store.dispatch(getMe());
