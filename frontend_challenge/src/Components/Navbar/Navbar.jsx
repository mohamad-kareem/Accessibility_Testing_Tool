import "./navbar.css"
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const Navbar = () => {
  return (
   <div className="navbar-wrapper">
      <div className="navbar_container">
          <div className="logo">A11yMastery</div>
          <div className="nav-icon">
            <FaBars/>
          </div>
          <div className="nav_menu">
            <div className="nav_items">
              <Link to="about" className="nav_links">About</Link>
              <Link to="services" className="nav_links">Services</Link>
              <Link to="discover" className="nav_links">Discover</Link>
              <Link to="signup" className="nav_links">Sign Up</Link>
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
