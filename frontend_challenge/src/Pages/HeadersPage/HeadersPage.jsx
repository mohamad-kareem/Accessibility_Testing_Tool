import "./headerpage.css"
import InfoTable from '../../Components/InfoTable/InfoTable'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import headpic from "../../assets/header-image.png"
const HeadersPage = () => {
  return (
    <div className='header-wrapper'>
        <SideBar/>
        <div className="header-container">
            <TopIdentifier title="Semantics"/>
            <div className="text-info-container">
                <div className="left-content">
                        <h1>Proper Heading Structure</h1>
                        <p>Discover the importance of using proper heading tags,<br />
                           maintaining hierarchy, and providing descriptive headings
                           to improve navigation and accessibility for all users.
                        </p>
                </div>
                <div className="right-pic">
                    <img src={headpic} alt="showing how headers must be displayed" />
                </div>
            </div>
            <div className="buttom-header">
            <InfoTable/>
            </div>
       </div>
    </div>
  )
}

export default HeadersPage
