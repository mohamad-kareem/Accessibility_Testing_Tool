import "./section1.css"
import image1 from "../../assets/undraw_Contrast_re_hc7k.png"
import {section1} from "../TextContent"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
const Section1 = () => {
  return (
<div className='info-wrapper' id="id">
        <div className="info-container">
            <div className="text-content">
                <h1>{section1.title}</h1>
                 <p>{section1.description}</p>
            </div>
            <div className="info-image">
                <img src={image1} alt={section1.alt} />
            </div>
            
        </div>
        <ButtonComponent children='Learn more'/>
    </div>
  )
}

export default Section1
