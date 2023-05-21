import "./headerpage.css"
import InfoTable from '../../Components/InfoTable/InfoTable'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"

const HeadersPage = () => {
  return (
    <div className='header-wrapper'>
        <SideBar/>
        <div className="header-container">
            <TopIdentifier title="Semantics"/>
            <div className="anime">

            </div>
            <div className="buttom-header">
            <InfoTable/>
            </div>
       </div>
    </div>
  )
}

export default HeadersPage
