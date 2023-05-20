import "./section.css"
import image1 from "../../assets/img1.svg"
import {section1} from "../TextContent"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
const Section = () => {
  return (
<div className='info-wrapper-1' id="colors">
        <div className="info-container">
            <div className="text-content">
                <h1>{section1.title}</h1>
                 <p>{section1.description}</p>
                 <ButtonComponent children='Learn more' width="120px"/>
            </div>
            <div className="info-image">
                <img src={image1} alt={section1.alt} />
            </div>
            
        </div>
       
    </div>
  )
}

export default Section
