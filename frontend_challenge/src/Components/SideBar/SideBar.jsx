import "./sidebar.css"
import {FaTimes} from 'react-icons/fa'
import { Link as LinkRoute} from 'react-router-dom';
import { Link as LinkScroll} from 'react-router-dom';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const SideBar = ({isOpen,toggle}) => {
  return (
    <div className={`sidebar-wrapper-${isOpen ? 'open' : 'close'}`}>
        <div className="icon-container">
            <div className="close-icon" onClick={toggle}>
                <FaTimes/>
            </div>
        </div>
        <div className="sidebar-container">
          <div className="sidebar-menu">
            <div className="sidebar-link">
              <LinkScroll to="about" className="sidebar_links">About</LinkScroll>
              <LinkScroll to="services" className="sidebar_links">Services</LinkScroll>
              <LinkScroll to="discover" className="sidebar_links">Discover</LinkScroll>
              <LinkRoute to="signup" className="sidebar_links">Sign Up</LinkRoute>
            </div>
          </div>
          <div className="sidebar-button-container">
            <ButtonComponent width="95px" children="Sign In"/>
          </div>
        </div>
    </div>
  )
}

export default SideBar
