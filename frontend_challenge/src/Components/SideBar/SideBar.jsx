import "./sidebar.css"
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

      <NavLink to="/CheckCode" className="row" activeClassName="active">
          <div id="icon"><img src={coding} alt="code icon" /></div>
          <div id="title">{section4.coding}</div>
        </NavLink>

        <NavLink to="/images" className="row" activeclassname="active">
          <div id="icon"><img src={picture} alt="image icon" /></div>
          <div id="title">{section4.picture}</div>
        </NavLink>

        <NavLink to="/semantics" className="row" activeclassname="active">
          <div id="icon"><img src={semantics} alt="semantics and headers" /></div>
          <div id="title">{section4.semantics}</div>
        </NavLink>


        <NavLink to="/focusing" className="row" activeclassname="active">
          <div id="icon"><img src={target} alt="Focus and Keyboard Accessibility" /></div>
          <div id="title">{section4.target}</div>
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
