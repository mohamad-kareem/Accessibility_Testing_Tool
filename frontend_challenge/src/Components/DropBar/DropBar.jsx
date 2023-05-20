import "./dropbar.css"
import {FaTimes} from 'react-icons/fa'
import { Link as LinkRoute} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const DropBar = ({isOpen,toggle}) => {
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
              <LinkScroll to="colors"className="sidebar_links">Colors</LinkScroll>
              <LinkScroll to="semantics" className="sidebar_links">Semactics</LinkScroll>
              <LinkScroll to="Focusing" className="sidebar_links">Focusing</LinkScroll>
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

export default DropBar
