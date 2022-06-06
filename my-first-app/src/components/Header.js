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
import NavBar2 from "./NavBar2";

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

const Right = styled.div`
  display: flex;
  grid-column: 4 / 5;
  justify-content: center;
  align-items: center;
  display: flex;
  //flex-direction: row;
`;

const User = styled.span`
  color: #686868;
  font-size: 15px;
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
          {auth.userLoaded ? ( <span className="user">
            <Link to="/Profile"
            style={{ textDecoration: "none", color: "gray" }}>
              <FiUser style={{fontSize:"25px"}}/>
            </Link>
          </span> ) : <></> }
         

      
          {auth.userLoaded ? (
            <>
              {" "}
              <Text>
                {" "}
                <FiLogOut
              
                style={{fontSize:"25px"}}
                 onClick={() => {
                  dispatch(logoutUser(null));

                }}/>{" "}
              </Text>
            </>
          ) : (
            <>
            
            <User 
            
            onClick={() => navigate("/signup")}>
            S'INSCRIRE
            </User>
            <br />{" "}
            <User  onClick={() => navigate("/login")}>
            SE CONNECTER
            </User >
        
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
      <NavBar2/>
    </>
  );
};

export default Headerpfe;