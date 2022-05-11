import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Acceuil from "./pages/Acceuil";
import Activation from "./pages/Activation";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./Hocs/Layout";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Wishlist from "./components/Wishlist";
import Profileuser from "./pages/Profileuser";
import Profileseller from "./pages/Profileseller";
import Filtertest from "./pages/Filtertest";

import { ToastContainer } from "react-toastify";

//react router dom v6 syntax for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
        <Route path="/Filter" element={<Filtertest/>}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Cart/:id" element={<Cart />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>
          <Route path="/Profile" element={<Profileuser />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="/" exact element={<Acceuil />} />
          <Route path="/Profilevendeur" element={<Profileseller />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activation />} />
          {/*need to add a redirection to not found when typing in false urls */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;
