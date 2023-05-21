import "./imagepage.css"
import SideBar from "../../Components/SideBar/SideBar"
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import TimeLineInfo from "../../Components/TimeLineInfo/TimeLineInfo"
import num1 from "../../assets/number-1.png"
import num2 from "../../assets/number-2.png"
import num3 from "../../assets/number-3.png"
import num4 from "../../assets/number-4.png"
import num5 from "../../assets/number-5.png"
import num6 from "../../assets/number-6.png"
import {card1 ,card2,card3,card4,card5,card6} from "../../Components/TextContent"
const Palette = () => {
  return (
    <div className='picture-wrapper'>
    <SideBar/>
    <div className="picture-container">
      <TopIdentifier title="Alt text"/>
      <div className="buttom-image-container">
          <TimeLineInfo position="left-container" image={num1} title={card1.title} description={card1.description} className="delay-1"/>
          <TimeLineInfo position="right-container" image={num2} title={card2.title} description={card2.description} className="delay-2"/>
          <TimeLineInfo position="left-container" image={num3} title={card3.title} description={card3.description} className="delay-3"/>
          <TimeLineInfo position="right-container" image={num4} title={card4.title} description={card4.description} className="delay-4"/>
          <TimeLineInfo position="left-container" image={num5} title={card5.title} description={card5.description} className="delay-5"/>
          <TimeLineInfo position="right-container" image={num6} title={card6.title} description={card6.description} className="delay-6"/>
      </div>
    </div>
  </div>
  )
}

export default Palette
