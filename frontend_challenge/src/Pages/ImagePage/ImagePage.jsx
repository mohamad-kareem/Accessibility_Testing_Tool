import "./imagepage.css"
import SideBar from "../../Components/SideBar/SideBar"
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"

const Palette = () => {
  return (
    <div className='image-wrapper'>
    <SideBar/>
    <div className="image-container">
      <TopIdentifier title="Alt text"/>
   
    </div>
  </div>
  )
}

export default Palette
