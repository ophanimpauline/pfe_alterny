import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.uuid) {
      navigate("/");
    }
  }, [auth.uuid, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="mot de passe"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button style={{backgroundColor:"black", color:"white", border:"none", marginTop:"10px", marginBottom:"30px" ,padding:"20px 40px"}}>
          {auth.loginStatus === "pending" ? "Chargement..." : "SE CONNECTER"}
        </button>
        {auth.loginStatus === "rejected" ? <p>{auth.loginError}</p> : null}
      </form>
    </>
  );
};

export default Login1;