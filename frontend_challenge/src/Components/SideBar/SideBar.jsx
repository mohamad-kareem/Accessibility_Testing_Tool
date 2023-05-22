import "./sidebar.css"
import Home from "../../icons/house.png"
import coding from "../../icons/coding.png"
import picture from "../../icons/picture.png"
import semantics from "../../icons/semantic-web.png"
import target from "../../icons/target.png"
import test from "../../icons/test.png"
import { NavLink } from 'react-router-dom';
import { section4 } from "../TextContent"
import Logo from "../Logo/Logo"
const SideBar = () => {
  return (
    <div className="sidebar">
      <Logo borderBottom="1px solid green" padding="10px"/>
     <div className="sidebar-content">
      <div className="SideBarList"> 

        <NavLink to="/landing" className="row" activeClassName="active">
          <div id="icon"><img src={Home} alt="home bulding" /></div>
          <div id="title">{section4.home}</div>
        </NavLink>

        <NavLink to="/CheckCode" className="row" activeclassName="active">
          <div id="icon"><img src={coding} alt="code icon" /></div>
          <div id="title">{section4.coding}</div>
        </NavLink>

        <NavLink to="/imagePage" className="row" activeclassname="active">
          <div id="icon"><img src={picture} alt=" pic icon" /></div>
          <div id="title">{section4.picture}</div>
        </NavLink>

        <NavLink to="/semantics" className="row" activeclassname="active">
          <div id="icon"><img src={semantics} alt="semantics and headers" /></div>
          <div id="title">{section4.semantics}</div>
        </NavLink>


        <NavLink to="/Usability" className="row" activeclassname="active">
          <div id="icon"><img src={target} alt="Focus and Keyboard Accessibility" /></div>
          <div id="title">{section4.usability}</div>
        </NavLink>

        <NavLink to="/testpage" className="row" activeclassname="active">
          <div id="icon"><img src={test} alt="test demo" /></div>
          <div id="title">{section4.test}</div>
        </NavLink>

      </div>
     </div>
   </div>
  )
}

export default SideBar
