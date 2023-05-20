import "./navbar.css"
import { Link as LinkRoute} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Navbar = ({toggle}) => {
  return (
   <div className="navbar-wrapper">
      <div className="navbar_container">
          <div className="logo">A11yMastery</div>
          <div className="nav-icon" onClick={toggle}>
            <FaBars/>
          </div>
          <div className="nav_menu">
            <div className="nav_items">
              <LinkScroll to="colors" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Colors</LinkScroll>
              <LinkScroll to="semantics" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Semantics</LinkScroll>
              <LinkScroll to="Focusing" smooth={true} duration={500} spy={true} exact='true' offset={-80} className="nav_links">Focusing</LinkScroll>
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
