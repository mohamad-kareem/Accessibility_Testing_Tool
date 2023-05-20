import "./sidebar.css"
import coding from "../../icons/coding.png"
import palette from "../../icons/palette.png"
import semantics from "../../icons/semantic-web.png"
import target from "../../icons/target.png"
import test from "../../icons/test.png"
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="sidebar">
     <div className="sidebar-content">
      <div className="SideBarList"> 

        <NavLink to="/CheckCode" className="row">
          <div id="icon"><img src={coding} alt="Checking the code" /></div>
          <div id="title"></div>
        </NavLink>

        <NavLink to="/colors" className="row" activeclassname="active">
          <div id="icon"><img src={target} alt="colors to use" /></div>
          <div id="title"></div>
        </NavLink>

        <NavLink to="/semantics" className="row" activeclassname="active">
          <div id="icon"><img src={semantics} alt="semantics and headers" /></div>
          <div id="title"></div>
        </NavLink>


        <NavLink to="/focusing" className="row" activeclassname="active">
          <div id="icon"><img src={palette} alt="Focus and Keyboard Accessibility" /></div>
          <div id="title"></div>
        </NavLink>

        <NavLink to="/testDemo" className="row" activeclassname="active">
          <div id="icon"><img src={test} alt="test demo" /></div>
          <div id="title"></div>
        </NavLink>

      </div>
     </div>
   </div>
  )
}

export default SideBar
