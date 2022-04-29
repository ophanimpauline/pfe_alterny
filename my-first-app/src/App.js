import './App.css';
import Acceuil from './pages/Acceuil';
import Activation from './pages/Activation';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from "./Hocs/Layout";
//react router dom v6 syntax for routing
import { BrowserRouter , Routes, Route } from 'react-router-dom';

const App = () => (
  <>
  <BrowserRouter>
  <Layout> 
  <Routes>
    <Route path="/" element={<Acceuil/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Register/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
    <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
    <Route path="/activate/:uid/:token" element={<Activation/>}/>
  </Routes>
  </Layout>
  </BrowserRouter>
  
  </>
);

export default App;