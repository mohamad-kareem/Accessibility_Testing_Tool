import "./imagepage.css"
import SideBar from "../../Components/SideBar/SideBar"
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"

const Palette = () => {
  return (
    <div className='picture-wrapper'>
    <SideBar/>
    <div className="picture-container">
      <TopIdentifier title="Alt text"/>
   
    </div>
  </div>
  )
}

export default Palette
