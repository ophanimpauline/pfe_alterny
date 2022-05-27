import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Acceuil from "./pages/Acceuil";
import Activation from "./pages/Activation";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Login1 from "./components/Login1";
import Register from "./components/Register";
import Layout from "./Hocs/Layout";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Wishlist from "./components/Wishlist";
import Profileuser from "./pages/Profileuser";
import ProfileEdit from "./components/ProfileEdit";
import Filtertest from "./pages/Filtertest";
import ProductDetail from "./components/ProductDetail";
import { ToastContainer } from "react-toastify";
//react router dom v6 syntax for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profilepanier from "./pages/Profilepanier";
import Profilewishlist from "./pages/Profilewishlist";
import Store from "./components/Store";
import SellerRegistration from "./pages/SellerRegistration";
import StoreRegister from "./components/StoreRegister";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getMe} from "./features/auth/authSlice";
import Commande from "./components/Commande";
const App = () => {
  /*const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getMe)
  }, [dispatch]);*/


  return (
      <>
        <BrowserRouter>
          <ToastContainer />
          <Layout>
            <Routes>
              <Route path="/" exact element={<Acceuil />} />
              <Route path="/product-detail/:id" element={<ProductDetail/>}/>
              <Route path ="/commande-test" element={<Commande/>} />
              <Route path="/Filter" element={<Filtertest/>}></Route>
              <Route path="/Cart" element={<Cart />}></Route>
              <Route path="/Cart/:id" element={<Cart />}></Route>
              <Route path="/profile-panier" element={<Profilepanier/>}></Route>
              <Route path="/profile-wishlist" element={<Profilewishlist />}></Route>
              <Route path="/boutique/:id" element={<Store/>}></Route>
              <Route path="/Wishlist" element={<Wishlist />}></Route>
              <Route path="/Profile" element={<Profileuser />}></Route>
              <Route path="/editprofile" element={<ProfileEdit />}></Route>
              <Route path="/login" element={<Login1 />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route
                  path="/password/reset/confirm/:uid/:token"
                  element={<ResetPasswordConfirm />}
              />
              <Route path="/store-register" element={<StoreRegister/>}/>
              <Route path="/seller-register" element={<SellerRegistration/>}/>
              <Route path="/activate/:uid/:token" element={<Activation />} />
              <Route path="*" element={<NotFound />}></Route>
              <Route to="/not-found" />
              {/*need to add a redirection to not found when typing in false urls */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
  );
}

export default App;