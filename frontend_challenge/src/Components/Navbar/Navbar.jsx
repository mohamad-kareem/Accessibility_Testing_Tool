import "./navbar.css"
import { Link as LinkRoute} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Logo from "../Logo/Logo";
const Navbar = ({toggle}) => {
  return (
   <div className="navbar-wrapper">
      <div className="navbar_container">
          <Logo/>
          <div className="nav-icon" onClick={toggle}>
            <FaBars/>
          </div>
          <div className="nav_menu">
            <div className="nav_items">
              <LinkScroll to="colors" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Colors</LinkScroll>
              <LinkScroll to="semantics" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Semantics</LinkScroll>
              <LinkScroll to="Usability" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Usability</LinkScroll>
              <LinkRoute to="signup" className="nav_links">Sign Up</LinkRoute>
            </div>
            <div className="btn-container">
              <ButtonComponent width="90px" children="Sign In"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
