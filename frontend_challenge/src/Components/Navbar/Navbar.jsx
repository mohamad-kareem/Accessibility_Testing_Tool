import "./navbar.css"
import { Link as LinkRoute} from 'react-router-dom';
import { Link as LinkScroll} from 'react-router-dom';
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
              <LinkScroll to="about" className="nav_links">About</LinkScroll>
              <LinkScroll to="services" className="nav_links">Services</LinkScroll>
              <LinkScroll to="discover" className="nav_links">Discover</LinkScroll>
              <LinkRoute to="signup" className="nav_links">Sign Up</LinkRoute>
            </div>
            <div className="btn-container">
              <ButtonComponent width="80px" children="Sign In"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
