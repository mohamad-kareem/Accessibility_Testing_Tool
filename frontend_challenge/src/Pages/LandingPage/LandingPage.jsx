import Navbar from "../../Components/Navbar/Navbar"
import SideBar from "../../Components/SideBar/SideBar"
import "./landingpage.css"
import { useState } from "react"
const LandingPage = () => {
  const [isOpen,setIsOpen]=useState(false)

  const toggle =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
    </div>
  )
}

export default LandingPage
