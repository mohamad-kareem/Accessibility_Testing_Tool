import "./section2.css"
import image2 from "../../assets/undraw_online_organizer_re_156n.svg"
import {section2} from "../TextContent"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
const Section2 = () => {
  return (
<div className='info-wrapper-2' id="id">
        <div className="info-container">
            <div className="text-content">
                <h1 style={{ color: '#fff' }}>{section2.title}</h1>
                 <p style={{ color: '#fff' }}>{section2.description}</p>
                 <ButtonComponent children='Learn more' width="120px"/>
            </div>
            <div className="info-image-2">
                <img src={image2} alt={section2.alt}  />
            </div>
            
        </div>
       
    </div>
  )
}

export default Section2
