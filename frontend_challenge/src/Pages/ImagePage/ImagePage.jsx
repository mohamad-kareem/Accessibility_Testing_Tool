import "./imagepage.css"
import SideBar from "../../Components/SideBar/SideBar"
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import InfoCard from "../../Components/InfoCard/InfoCard"

const Palette = () => {
  return (
    <div className='picture-wrapper'>
    <SideBar/>
    <div className="picture-container">
      <TopIdentifier title="Alt text"/>
      <div className="buttom-image-container">
        
      </div>
   
    </div>
  </div>
  )
}

export default Palette
