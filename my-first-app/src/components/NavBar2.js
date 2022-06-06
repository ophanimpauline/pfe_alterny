import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const NavBar2 = () => {
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  function handleClick(e) {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <AppBar elevation="0" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
          component="div"
        >
          {/*logo */}
          <Box>
            {/*<IconButton>
              <MenuOutlinedIcon />
        </IconButton>*/}
        <Link to="/" style={{textDecoration:"none", color:"#1db5c0"}}> 
        <h3 style={{color:"#1db5c0", cursor:"pointer"}}>ALTERNY</h3>
        </Link>
          </Box>
          {/*Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              ACCEUIL{" "}
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
            >
              FEMME{" "}
            </Typography>
            {/*femme drop down items */}
            <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}>
              <MenuItem>Robes</MenuItem>
              <MenuItem>Jupes</MenuItem>
              <MenuItem>Combinaisons et ensembles</MenuItem>
              <MenuItem>Chaussettes bas et collants</MenuItem>
              <MenuItem>Pulls gilets et sweats</MenuItem>
              <MenuItem>Hoodies et sweatshirts</MenuItem>
              <MenuItem> Manteaux et blousons</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {}}
            >
              HOMME{" "}
            </Typography>
            <Menu>
              <MenuItem>Pulls et Gilets</MenuItem>
              <MenuItem>Pantalons</MenuItem>
              <MenuItem>Jeans Homme</MenuItem>
              <MenuItem>Sweats à capuche</MenuItem>
              <MenuItem>Vestes et manteaux</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {}}
            >
              ENFANTS{" "}
            </Typography>
            <Menu>
              <MenuItem>Vêtements filles</MenuItem>
              <MenuItem>Vêtements garçons</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {}}
            >
              AIDE{" "}
            </Typography>
            <Menu>
              <MenuItem>Demande de retour</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {}}
            >
              VENDEUR{" "}
            </Typography>
            <Menu>
              <MenuItem>INSCRIPTION</MenuItem>
              <MenuItem>CONNEXION</MenuItem>
            </Menu>
          </Box>
          {/*Liens d'inscription et connexion */}
          {/*et boutons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              S'INSCRIRE{" "}
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              CONNEXION{" "}
            </Typography>
            <IconButton>
              <PermIdentityOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <span className="bag-quantity">
              <span>{cartTotalQuantity}</span>
            </span>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar2;
