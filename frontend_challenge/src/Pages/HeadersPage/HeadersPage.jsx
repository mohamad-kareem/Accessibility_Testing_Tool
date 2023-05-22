import "./headerpage.css"
import InfoTable from '../../Components/InfoTable/InfoTable'
import SideBar from '../../Components/SideBar/SideBar'
import TopIdentifier from "../../Components/TopIdentifier/TopIdentifier"
import headpic from "../../assets/header-image.png"
import { headerPageInfo } from "../../Components/TextContent"
const HeadersPage = () => {
  return (
    <div className='header-wrapper'>
        <SideBar/>
        <div className="header-container">
            <TopIdentifier title="Semantics"/>
            <div className="text-info-container">
                <div className="left-content">
                        <h1>{headerPageInfo.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: headerPageInfo.info }}></p>
                </div>
                <div className="right-pic">
                    <img src={headpic} alt="showing how headers must be displayed" />
                </div>
            </div>
            <InfoTable/>
       </div>
    </div>
  )
}

export default HeadersPage
