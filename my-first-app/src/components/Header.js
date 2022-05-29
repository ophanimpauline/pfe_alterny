import React, {useState} from "react";
import styled from "styled-components";
import Infobar from "./Infobar";
import { useSelector, useDispatch } from "react-redux";
import {
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiLogOut,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";
import Search from "./Search";
import { productsSearch } from "../features/productsSlice";

const Container = styled.div`
  height: 85px;
  background-color: white;
  font-family: "Lato";
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1;
`;
const Logo = styled.h1`
  font-size: 35px;
  color: #1db5c0;
  cursor: pointer;
  grid-column: 1 / 2;
  justify-self: center;
  align-self: center;
`;
const Searchspace = styled.div`
  max-width: 31.25rem;
  grid-column: 2 / 4;
  justify-self: center;
  align-self: center;
  padding: 4px;
`;
/*const Wrapper = styled.div`
  max-width: 31.25rem;
  grid-column: 2 / 4;
  justify-self: center;
  align-self: center;
`;
const SearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 400px;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
`;
const SearchSubmit = styled.button`
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;*/

/* <>
            <Text>
            <span>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "gray" }}
              >
                Créer un compte
              </Link>
            </span>
            <br />{" "}
            <span>
              {" "}
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "gray" }}
              >
                {" "}
                Connexion{" "}
              </Link>
            </span>
          </Text>
             </> */

const Right = styled.div`
  display: flex;
  grid-column: 4 / 5;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const User = styled.span`
  color: #686868;
  font-size: 25px;
  cursor: pointer;
  margin-right: 5px;
`;
const Shoppingcart = styled.span`
  color: #686868;
  font-size: 25px;
  cursor: pointer;
  margin: 5px;
`;
const Heart = styled.span`
  color: #686868;
  font-size: 25px;
  cursor: pointer;
  margin-left: 5px;
`;

const Text = styled.small`
  font-size: 15px;
  cursor: pointer;
  color: #686868;
  &:hover {
    text-decoration: underline;
  }
`;

const Headerpfe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product); 
  return (
    <>
      <Infobar />
      <Container>
        <Logo>
        <Link to="/" style={{textDecoration:"none", color:"#1db5c0"}}> 
          ALTERNY
          </Link>
          </Logo>
        <Searchspace> 
        <Search/>
        </Searchspace>

        <Right>
          {auth.loginStatus ? ( <User>
            <Link to="/Profile"
            style={{ textDecoration: "none", color: "gray" }}>
              <FiUser />
            </Link>
          </User> ) : <></> }
         

      
          {auth.loginStatus ? (
            <>
              {" "}
              <Text>
                {" "}
                <FiLogOut
                className="logout"
                style={{height:"20px"}}
                 onClick={() => {
                  dispatch(logoutUser(null));

                }}/>{" "}
              </Text>
            </>
          ) : (
            <>
            
            <span>
            <button onClick={() => navigate("/signup")}>S'INSCRIRE</button>
            </span>
            <br />{" "}
            <span>
            <button style={{backgroundColor:"white", color:"black"}}onClick={() => navigate("/login")}>SE CONNECTER</button>
            </span>
        
             </>
          )}
          <Shoppingcart>
            <Link to="/Cart"
            style={{ textDecoration: "none", color: "gray"}}>
              <FiShoppingCart />
            </Link>
          </Shoppingcart>
              <span className="bag-quantity">
                <span>{cartTotalQuantity}</span>
              </span>
          <Heart>
            <Link to="/Wishlist"
            style={{ textDecoration: "none", color: "gray" }}>
              <FiHeart />
            </Link>
          </Heart>
        </Right>
      </Container>
    </>
  );
};

export default Headerpfe;