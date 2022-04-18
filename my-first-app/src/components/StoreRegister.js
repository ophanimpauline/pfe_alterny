import { useRef, useState, useEffect } from "react";
import "./Register.css";
import axios from '../api/axios';
//import { Link, Redirect } from 'react-router-dom';

const REGISTER_URL = '/auth/users/';


function StoreRegister() {
  //data objects empty stored in initialValues
  const initialValues = { store_name: "", description:"", brand:""};
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
    if (!values.store_name) {
      errors.store_name= "Ce champs est obligatoire";
    }  
    if (!values.description) {
        errors.last_name = "Ce champs est obligatoire";
      }
    if (!values.brand) {
      errors.brand = "Ce champs est obligatoire";
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
        <h1>Informations de la boutique </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nom de la boutique: * </label>
            <input
              type="text"
              name="store_name"
              placeholder=""
              value={formValues.store_name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.store_name}</p>
          <div className="field">
            <label>Description de la boutique: *</label>
            <input
              type="text"
              name="description"
              placeholder=""
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.description}</p>

          <div className="field">
            <label>Brand: *</label>
            <input
              type="text"
              name="brand"
              placeholder=""
              value={formValues.brand}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.brand}</p>
          <button className="fluid ui button blue">CRÉER VOTRE BOUTIQUE</button>
        </div>
      </form>
    </div>
      )} 
      </>
  );
      }

export default StoreRegister;