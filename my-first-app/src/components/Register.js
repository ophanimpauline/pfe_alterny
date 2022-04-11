import { useRef, useState, useEffect } from "react";
import "./Register.css";
import axios from '../api/axios';
//import { Link, Redirect } from 'react-router-dom';

const REGISTER_URL = '/auth/users/';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function Register() {
  //data objects empty stored in initialValues
  const initialValues = { first_name: "", last_name:"", username:"",type:"", email: "", password: "", re_password:"" };
  //state and set state object of form values, takes in initial values object to load them there
  const [formValues, setFormValues] = useState(initialValues);
  //form errors
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    //need to put these in the then thingy
    formValues.username=formValues.email;
    formValues.type="1";
    setFormErrors(validate(formValues));
    try{
      const response= await axios.post(REGISTER_URL,
        formValues,
        {
          headers: {  'Content-Type': 'application/json'},
          withCredentials: true }
        );
        console.log(response.data);
        console.log(response.accessToken);
        setIsSubmit(true);
        //clear input fields 
    }catch (formErrors){
      if(!formErrors?.response) {
        setFormErrors('No Server Response');
      } else if (formErrors.response?.status === 400) {
        setFormErrors('Cet email est déjà utilisé!')
      }
    }}
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Le nom est obligatoire";
    }  
    if (!values.last_name) {
        errors.last_name = "Le prénom est obligatoire";
      }
    if (!values.email) {
      errors.email = "L'email est obligatoire !";
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Tapez un email valide !";
    }
    if (!values.password) {
      errors.password = "Le mot de passe est obligatoire!";
    } else if (!PWD_REGEX.test(values.password)) {
      errors.password = "Votre mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et une longueur d'au moins 10";
    }else if (values.re_password && values.re_password !== values.password ){
      errors.re_password ="Ce champs doit être identique à votre mot de passe!"
    }
    return errors;
  };
 

  return (
    <>
    {isSubmit ? (
        <section>
          <h1> Félicitations !</h1>
          <p>
            <a href="#">Se connecter</a>
          </p>
        </section>
      ) : (

    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>S'inscrire avec votre e-mail: </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nom: * </label>
            <input
              type="text"
              name="first_name"
              placeholder=""
              value={formValues.first_name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.first_name}</p>
          <div className="field">
            <label>Prénom: *</label>
            <input
              type="text"
              name="last_name"
              placeholder=""
              value={formValues.last_name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.last_name}</p>

          <div className="field">
            <label>Adresse e-mail: *</label>
            <input
              type="text"
              name="email"
              placeholder=""
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Mot de passe: *</label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Confirmer le mot de passe: *</label>
            <input
              type="password"
              name="re_password"
              placeholder=""
              value={formValues.re_password}
              onChange={handleChange}
              required
            />
          </div>
          <p>{formErrors.re_password}</p>
          <button className="fluid ui button blue">S'INSCRIRE</button>
        </div>
      </form>
    </div>
      )} 
      </>
  );
      }

export default Register;