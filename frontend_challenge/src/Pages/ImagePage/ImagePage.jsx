import "./imagepage.css"
import SideBar from "../../Components/SideBar/SideBar"
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import TimeLineInfo from "../../Components/TimeLineInfo/TimeLineInfo"

const Palette = () => {
  return (
    <div className='picture-wrapper'>
    <SideBar/>
    <div className="picture-container">
      <TopIdentifier title="Alt text"/>
      <div className="buttom-image-container">
        <TimeLineInfo/>
      </div>
   
    </div>
  </div>
  )
}

export default Palette
