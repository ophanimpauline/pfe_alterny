import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Login1 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [email, password] = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    //action from the auth passing in the email and password
  };

  //is the user authenticated or not
  //redirect to home page

  return (
    <div>
      <h1> SE CONNECTER </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
            <input
            type='email'
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
            />
            <input
            type='password'
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
            />

        </div>
        <button>SE CONNECTER</button>
      </form>
      <p className="mt-3">
      <Link to="/signup"> Vous n'avez pas de compte? </Link>
      </p>
      <p className="mt-3">
      <Link to="/reset-password"> Mot de passe oublié?  </Link>
          
      </p>
      
          
    </div>
  );
};
//const mapStateToProps = state => ({
    //is authenticated 
//})

export default connect(null, { })(Login1);
