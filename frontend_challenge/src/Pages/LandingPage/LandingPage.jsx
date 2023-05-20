import LandingIntro from "../../Components/LandingIntro/LandingIntro"
import Navbar from "../../Components/Navbar/Navbar"
import DropBar from "../../Components/DropBar/DropBar"
import "./landingpage.css"
import { useState } from "react"
import Section from "../../Components/Section/Section"
import Section2 from "../../Components/Section2/Section2"
import Section3 from "../../Components/Section3/Section3"
const LandingPage = () => {
  const [isOpen,setIsOpen]=useState(false)

  const toggle =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Navbar toggle={toggle}/>
      <DropBar isOpen={isOpen} toggle={toggle}/>
      <LandingIntro/>
      <Section/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default LandingPage
