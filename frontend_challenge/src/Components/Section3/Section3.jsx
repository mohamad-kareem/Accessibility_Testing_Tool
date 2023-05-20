import "./section3.css"
import image2 from "../../assets/img3.svg"
import {section3} from "../TextContent"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
const Section3 = () => {
  return (
<div className='info-wrapper' id="Focusing">
        <div className="info-container">
            <div className="text-content">
                <h1>{section3.title}</h1>
                 <p>{section3.description}</p>
                 <ButtonComponent children='Learn more' width="120px"/>
            </div>
            <div className="info-image-3">
                <img src={image2} alt={section3.alt}  />
            </div>
            
        </div>
       
    </div>
  )
}

export default Section3
