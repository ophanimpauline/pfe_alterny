import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import {BiHelpCircle} from 'react-icons/bi';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" style={{marginLeft:"50px", fontSize:"20px"}} href="#">
                FEMMES <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" style={{marginLeft:"50px", fontSize:"20px"}} href="#">
                HOMMES<span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" style={{marginLeft:"50px", fontSize:"20px"}} href="#">
                ENFANTS <span class="sr-only"></span>
              </a>
            </li>
           
            <li class="nav-item dropdown" >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{marginLeft:"700px", fontSize:"20px"}}
              >
               <BiHelpCircle style={{fontSize:"20px"}}/> Aide 
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;