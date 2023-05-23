import LandingIntro from "../../Components/LandingIntro/LandingIntro"
import Navbar from "../../Components/Navbar/Navbar"
import DropBar from "../../Components/DropBar/DropBar"
import "./landingpage.css"
import { useState } from "react"
import { useInView } from 'react-intersection-observer';
import Section from "../../Components/Section/Section"
import Section2 from "../../Components/Section2/Section2"
import Section3 from "../../Components/Section3/Section3"
import Footer from "../../Components/Footer/Footer"
const LandingPage = () => {

  const [isOpen,setIsOpen]=useState(false)

  const toggle =()=>{
    setIsOpen(!isOpen)
  }

  const [refSection1, reach1] = useInView({
    triggerOnce: true,
  });

  const [refSection2, reach2] = useInView({
    triggerOnce: true,
  });

  const [refSection3, reach3] = useInView({
    triggerOnce: true,
  });
  return (
    <div className="landingpage">
      <Navbar toggle={toggle} showLinks={true}/>
      <DropBar isOpen={isOpen} toggle={toggle}/>
      <LandingIntro/>
      <div className={`section-container ${reach1 ? 'visible' : ''}`} ref={refSection1}>
        <Section/>
      </div>
      <div className={`section2-container ${reach2 ? 'visible' : ''}`} ref={refSection2}>
        <Section2/>
      </div>
     <div className={`section2-container ${reach3 ? 'visible' : ''}`} ref={refSection3}>
        <Section3/>
     </div>
     <Footer/>

    </div>
  )
}

export default LandingPage
