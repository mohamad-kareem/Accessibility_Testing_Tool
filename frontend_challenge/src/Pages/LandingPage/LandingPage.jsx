import LandingIntro from "../../Components/LandingIntro/LandingIntro"
import Navbar from "../../Components/Navbar/Navbar"
import SideBar from "../../Components/SideBar/SideBar"
import Section1 from "../../Components/Section1/Section1"
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
      <LandingIntro/>
      <Section1/>
    </div>
  )
}

export default LandingPage
