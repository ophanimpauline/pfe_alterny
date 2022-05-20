import { useRef, useState, useEffect } from "react";
import "./Register.css";
import styled, { css } from "styled-components";
import axios from '../features/api/axios';
import AnimatedShapes from "./AnimatedShapes";
import {ImFacebook2} from "react-icons/im"
import { Link} from 'react-router-dom';

const REGISTER_URL = '/auth/users/';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: #FFB6C1;
`;
const COntainer = styled.div`
  font-family: "lato";
`;

const WrapperG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 25px;
`;
const STitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DP = styled.p`
  font-size: 14px;
  color: black;`

function SellerRegister() {
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
    formValues.type="2";
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
   <Container>
   {/*<WrapperG>
            <Title>CRÉER VOTRE COMPTE</Title>
            <STitle>S'inscrire avec Facebook:</STitle>

            <button className="button-registration">
              <ImFacebook2 style={{ color: "#4267B2" }} />
              S'inscrire avec Facebook
            </button>
            <DP>
              C'est facile, rapide et vous n'avez pas besoin de mémoriser un mot
              de passe. Nous ne partagerons pas vos données et ne publierons
              rien en votre nom.
            </DP>
  </WrapperG>*/}
        <div className="container">
       
        <IntoShape/>
        <AnimatedShapes/> 
        
          <hr style={{ size: "5px" }}></hr>
      <form onSubmit={handleSubmit}>
        <h1>Créér un compte vendeur </h1>
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
          <Link to="/store-register">
          <button className="fluid ui button blue">CONTINUER</button>
          </Link>
        </div>
      </form>
      </div>
      </Container>
      
  </>
  );
      }

export default SellerRegister;